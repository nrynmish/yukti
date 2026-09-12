import { z } from "zod";
import { phoneSchema } from "./phone.js";

const aadhaarRegex = /^\d{12}$/;
const pinRegex = /^\d{6}$/;
const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
const ELIGIBLE_STATES = [
  "J&K",
  "Ladakh",
  "HP",
  "Punjab",
  "Haryana",
  "Delhi",
  "UP",
  "Chandigarh",
] as const;

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
    // z.coerce.date() runs arbitrary input through `new Date(...)`, where
    // e.g. `null` silently becomes 1970-01-01 instead of failing — validate
    // the expected yyyy-mm-dd shape and calendar validity first.
    dateOfBirth: z
      .string()
      .trim()
      .regex(dobRegex, "Date of birth must be a valid date (yyyy-mm-dd)")
      .refine((v) => !Number.isNaN(new Date(v).getTime()), "Date of birth must be a valid calendar date")
      .transform((v) => new Date(v)),
    gender: z.string().trim().min(2).max(30),

    aadhaarNumber: z.string().trim().regex(aadhaarRegex, "Aadhaar number must be exactly 12 digits"),

    addressLine1: z.string().trim().min(3).max(200),
    addressLine2: z.string().trim().max(200).optional(),
    pinCode: z.string().trim().regex(pinRegex, "PIN code must be exactly 6 digits"),
    city: z.string().trim().min(2).max(100),
    state: z.enum(ELIGIBLE_STATES, {
      errorMap: () => ({ message: "State must be an eligible North Indian state or UT" }),
    }),
    country: z.string().trim().min(2).max(100),

    phone: phoneSchema,
    alternatePhone: phoneSchema.optional(),
    backupEmail: z.string().trim().toLowerCase().email().max(255).optional(),
  })
  .strict();

export type UpsertProfileInput = z.infer<typeof upsertProfileSchema>;
