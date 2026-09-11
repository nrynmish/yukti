/**
 * Single entry point for every call to the SEWA backend.
 *
 * Two things every request here depends on:
 *  - `credentials: "include"` — the session is an httpOnly cookie, so it is
 *    never readable from JS and must be sent explicitly on a cross-origin
 *    request. Omitting it silently produces a 401 on every authed call.
 *  - The backend's CORS is locked to a single `CLIENT_ORIGIN` with
 *    credentials enabled, so `VITE_API_URL` and the backend's
 *    `CLIENT_ORIGIN` must agree about the pair of origins in play.
 */

const API_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:4000").replace(/\/$/, "");

/** A non-2xx response. `details` carries Zod's per-field errors when present. */
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "ApiError";
  }

  /** First field-level message, if the backend sent one — handy for forms. */
  get firstFieldError(): string | undefined {
    if (!this.details) return undefined;
    for (const messages of Object.values(this.details)) {
      if (messages?.length) return messages[0];
    }
    return undefined;
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  let res: Response;

  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      credentials: "include",
      headers: {
        ...(init.body ? { "Content-Type": "application/json" } : {}),
        ...init.headers,
      },
    });
  } catch {
    // fetch only rejects on network/CORS failure, never on HTTP status.
    throw new ApiError(0, "Cannot reach the server. Check your connection and try again.");
  }

  if (res.status === 204) return undefined as T;

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    throw new ApiError(
      res.status,
      body?.error ?? "Something went wrong. Please try again.",
      body?.details,
    );
  }

  return body as T;
}

const post = <T>(path: string, body?: unknown) =>
  request<T>(path, { method: "POST", body: body ? JSON.stringify(body) : undefined });

// ─── Types ──────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  emailVerified?: boolean;
}

export type TeamStatus = "draft" | "submitted" | "under_review" | "shortlisted" | "rejected";

export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  role: "leader" | "member";
}

export interface Team {
  id: string;
  name: string;
  institute: string;
  theme: string;
  problemStatement: string;
  status: TeamStatus;
  submittedAt: string | null;
  members?: TeamMember[];
}

// ─── Auth ───────────────────────────────────────────────────────────────────

export const authApi = {
  signup: (input: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | undefined;
    password: string;
  }) => post<{ message: string; email: string }>("/api/auth/signup", input),

  /** Resend the email-verification OTP. Always 200, even for unknown emails. */
  resendOtp: (email: string) => post<{ message: string }>("/api/auth/otp/send", { email }),

  /** On success the backend sets the session cookie — the user is signed in. */
  verifyOtp: (email: string, code: string) =>
    post<{ message: string; user: User }>("/api/auth/otp/verify", { email, code }),

  signin: (email: string, password: string) =>
    post<{ user: User }>("/api/auth/signin", { email, password }),

  signout: () => post<{ message: string }>("/api/auth/signout"),

  me: () => request<{ user: User | null }>("/api/auth/me"),

  forgotPassword: (email: string) =>
    post<{ message: string }>("/api/auth/password/forgot", { email }),

  resetPassword: (input: { email: string; code: string; password: string }) =>
    post<{ message: string }>("/api/auth/password/reset", input),
};

// ─── Team registration ──────────────────────────────────────────────────────

export const teamApi = {
  create: (input: { name: string; institute: string; theme: string; problemStatement: string }) =>
    post<{ team: Team }>("/api/register", input),

  /** Returns `{ team: null }` when the signed-in user hasn't created one. */
  getMine: () => request<{ team: Team | null }>("/api/register/me"),

  addMember: (
    teamId: string,
    input: { firstName: string; lastName: string; email: string; phone?: string | undefined },
  ) => post<{ member: TeamMember }>(`/api/register/${teamId}/members`, input),

  removeMember: (teamId: string, memberId: string) =>
    request<void>(`/api/register/${teamId}/members/${memberId}`, { method: "DELETE" }),

  submit: (teamId: string) => post<{ team: Team }>(`/api/register/${teamId}/submit`),
};