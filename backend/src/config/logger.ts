import pino from "pino";
import { isProd } from "./env.js";

export const logger = pino({
  level: isProd ? "info" : "debug",
  redact: {
    // Never let secrets/PII leak into logs.
    paths: [
      "req.headers.authorization",
      "req.headers.cookie",
      "*.password",
      "*.passwordHash",
      "*.password_hash",
      "*.otp",
      "*.code",
    ],
    censor: "[redacted]",
  },
  transport: isProd
    ? undefined
    : { target: "pino-pretty", options: { colorize: true, translateTime: "HH:MM:ss" } },
});
