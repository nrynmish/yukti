import { z } from "zod";

// Indian mobile number: optional +91, then a 10-digit number starting 6-9.
const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

// At least one lowercase, one uppercase, one digit, one special char.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

export const signupSchema = z
  .object({
    firstName: z.string().trim().min(1).max(100),
    lastName: z.string().trim().min(1).max(100),
    email: z.string().trim().toLowerCase().email().max(255),
    phone: z.string().trim().regex(phoneRegex, "Invalid Indian mobile number").optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(72) // bcrypt's effective limit
      .regex(passwordRegex, "Password must include upper, lower, number, and special character"),
  })
  .strict();

export const otpSendSchema = z
  .object({
    email: z.string().trim().toLowerCase().email(),
  })
  .strict();

export const otpVerifySchema = z
  .object({
    email: z.string().trim().toLowerCase().email(),
    code: z.string().trim().regex(/^\d+$/, "OTP must be numeric"),
  })
  .strict();

export const signinSchema = z
  .object({
    email: z.string().trim().toLowerCase().email(),
    password: z.string().min(1),
  })
  .strict();

export const forgotPasswordSchema = z
  .object({
    email: z.string().trim().toLowerCase().email(),
  })
  .strict();

export const resetPasswordSchema = z
  .object({
    email: z.string().trim().toLowerCase().email(),
    code: z.string().trim().regex(/^\d+$/, "OTP must be numeric"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(72)
      .regex(passwordRegex, "Password must include upper, lower, number, and special character"),
  })
  .strict();

export type SignupInput = z.infer<typeof signupSchema>;
export type OtpSendInput = z.infer<typeof otpSendSchema>;
export type OtpVerifyInput = z.infer<typeof otpVerifySchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;