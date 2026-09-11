import type { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.js";
import { isProd } from "../config/env.js";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
  }
}

export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Unexpected error: log full detail internally, return a generic message
  // externally. Never leak stack traces or DB errors to the client.
  logger.error({ err, path: req.path, method: req.method }, "unhandled_error");
  res.status(500).json({
    error: "Something went wrong. Please try again.",
    ...(isProd ? {} : { debug: err instanceof Error ? err.message : String(err) }),
  });
}
