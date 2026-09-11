import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import { logger } from "../config/logger.js";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
});

type OtpEmailPurpose = "email_verify" | "password_reset";

const COPY: Record<OtpEmailPurpose, { subject: string; lead: string }> = {
  email_verify: {
    subject: "Your SEWA 2026 verification code",
    lead: "Your verification code is",
  },
  password_reset: {
    subject: "Your SEWA 2026 password reset code",
    lead: "Your password reset code is",
  },
};

export async function sendOtpEmail(
  to: string,
  code: string,
  purpose: OtpEmailPurpose = "email_verify",
): Promise<void> {
  const { subject, lead } = COPY[purpose];

  await transporter.sendMail({
    from: env.SMTP_FROM,
    to,
    subject,
    text: `${lead} ${code}. It expires in ${env.OTP_EXPIRY_MINUTES} minutes. Do not share this code with anyone.`,
    html: `<p>${lead} <strong>${code}</strong>.</p>
           <p>It expires in ${env.OTP_EXPIRY_MINUTES} minutes. Do not share this code with anyone, including SEWA staff.</p>`,
  });
  logger.info({ to, purpose }, "otp_email_sent");
}