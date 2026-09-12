import rateLimit from "express-rate-limit";

// NOTE: default store is in-memory, which only works for a single instance.
// If this deploys behind a load balancer with multiple instances, swap in
// `rate-limit-redis` so limits are shared across processes.

export const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many signup attempts. Try again later." },
});

export const otpSendLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5, // matches OTP_MAX per hour regardless of per-request cooldown check
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => `${req.ip}:${req.body?.email ?? "unknown"}`,
  message: { error: "Too many OTP requests. Try again later." },
});

export const otpVerifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => `${req.ip}:${req.body?.email ?? "unknown"}`,
  message: { error: "Too many verification attempts. Try again later." },
});

export const signinLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => `${req.ip}:${req.body?.email ?? "unknown"}`,
  message: { error: "Too many sign-in attempts. Try again later." },
});




// Password reset is the most abusable unauthenticated endpoint here (it
// sends mail to an address the caller chose), so it's tighter than signin.
export const passwordResetRequestLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => `${req.ip}:${req.body?.email ?? "unknown"}`,
  message: { error: "Too many password reset requests. Try again later." },
});

export const passwordResetConfirmLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => `${req.ip}:${req.body?.email ?? "unknown"}`,
  message: { error: "Too many reset attempts. Try again later." },
});

// Public and unauthenticated (an applicant might be filing a grievance
// about being locked out), so this is keyed by IP alone rather than email
// \u2014 an attacker can trivially vary the email field, and a per-IP cap is
// what actually limits spam/abuse of the notification email this triggers.
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please try again later." },
});
