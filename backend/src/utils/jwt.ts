import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface SessionPayload {
  sub: string; // user id
  email: string;
}

export function signSession(payload: SessionPayload): string {
  const options: jwt.SignOptions = {
    // jsonwebtoken's type for expiresIn is narrower than `string`; env
    // validation already guarantees this is a valid duration string
    // (e.g. "7d"), so the cast is safe.
    expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    algorithm: "HS256",
  };
  return jwt.sign(payload, env.JWT_SECRET, options);
}

export function verifySession(token: string): SessionPayload {
  // Throws on invalid/expired token — caller (auth middleware) handles it.
  return jwt.verify(token, env.JWT_SECRET, { algorithms: ["HS256"] }) as SessionPayload;
}
