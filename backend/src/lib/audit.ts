import type { Request } from "express";
import { prisma } from "../config/prisma.js";
import { logger } from "../config/logger.js";

type AuditAction =
  | "signup"
  | "otp_send"
  | "otp_verify_success"
  | "otp_verify_failure"
  | "signin_success"
  | "signin_failure"
  | "signout"
  | "password_reset_request"
  | "password_reset_success"
  | "password_reset_failure"
  | "team_create"
  | "team_member_add"
  | "team_submit";

interface AuditParams {
  req: Request;
  userId?: string;
  action: AuditAction;
  metadata?: Record<string, unknown>;
}

/**
 * Writes an append-only audit trail entry. Failures here are logged but
 * never thrown — an audit log write must not be able to fail the request
 * it's describing.
 */
export async function writeAuditLog({ req, userId, action, metadata }: AuditParams): Promise<void> {
  try {
    await prisma.auditLog.create({
      data: {
        userId: userId ?? null,
        action,
        ipAddress: req.ip ?? null,
        metadata: metadata ?? undefined,
      },
    });
  } catch (err) {
    logger.error({ err, action, userId }, "audit_log_write_failed");
  }
}