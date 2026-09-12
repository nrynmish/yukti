import { z } from "zod";
import { phoneSchema } from "./phone.js";

// Adjust MIN/MAX to SEWA 2026's actual team-size rules.
export const TEAM_MIN_MEMBERS = 2; // leader + at least 1 other
export const TEAM_MAX_MEMBERS = 6;

// Kept as free text rather than an enum: SEWA's theme and problem-statement
// lists are expected to change between rounds, and a DB enum would need a
// migration each time. Validate against the live catalogue at the service
// layer if/when these move into their own table.
export const createTeamSchema = z
  .object({
    name: z.string().trim().min(3).max(150),
    institute: z.string().trim().min(2).max(200),
    theme: z.string().trim().min(2).max(150),
    problemStatement: z.string().trim().min(2).max(200),
  })
  .strict();

export const addMemberSchema = z
  .object({
    firstName: z.string().trim().min(1).max(100),
    lastName: z.string().trim().min(1).max(100),
    email: z.string().trim().toLowerCase().email(),
    phone: phoneSchema.optional(),
  })
  .strict();

export type CreateTeamInput = z.infer<typeof createTeamSchema>;
export type AddMemberInput = z.infer<typeof addMemberSchema>;