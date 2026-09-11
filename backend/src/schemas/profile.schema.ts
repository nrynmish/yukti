import { z } from "zod";

const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
const aadhaarRegex = /^\d{12}$/;
const pinRegex = /^\d{6}$/;

// Category / nationality / gender / state are kept as free text rather than
// enums — same rationale as team.schema's theme/problemStatement: these
// lists are expected to be finalized before launch and a DB enum would need
// a migration every time they change. The frontend constrains them to a
// fixed dropdown; this just guards length/shape.
export const upsertProfileSchema = z
  .object({
    firstName: z.string().trim().min(1).max(100),
    middleName: z.string().trim().max(100).optional(),
    lastName: z.string().trim().min(1).max(100),
    category: z.string().trim().max(50).optional(),
    nationality: z.string().trim().min(2).max(100),
    dateOfBirth: z.coerce.date(),
    gender: z.string().trim().min(2).max(30),

    aadhaarNumber: z.string().trim().regex(aadhaarRegex, "Aadhaar number must be exactly 12 digits"),

    addressLine1: z.string().trim().min(3).max(200),
    addressLine2: z.string().trim().max(200).optional(),
    pinCode: z.string().trim().regex(pinRegex, "PIN code must be exactly 6 digits"),
    city: z.string().trim().min(2).max(100),
    state: z.string().trim().min(2).max(100),
    country: z.string().trim().min(2).max(100),

    phone: z.string().trim().regex(phoneRegex, "Invalid Indian mobile number"),
    alternatePhone: z.string().trim().regex(phoneRegex, "Invalid Indian mobile number").optional(),
    backupEmail: z.string().trim().toLowerCase().email().max(255).optional(),
  })
  .strict();

export type UpsertProfileInput = z.infer<typeof upsertProfileSchema>;
