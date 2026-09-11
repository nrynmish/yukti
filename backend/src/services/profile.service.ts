import { prisma } from "../config/prisma.js";
import type { UpsertProfileInput } from "../schemas/profile.schema.js";

export async function getMyProfile(userId: string) {
  const [user, profile] = await Promise.all([
    prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { firstName: true, lastName: true, email: true, phone: true },
    }),
    prisma.candidateProfile.findUnique({ where: { userId } }),
  ]);

  return { user, profile };
}

/**
 * Full-replace upsert: the dossier's Step 1 is submitted as one unit, so
 * there's no partial-field semantics to preserve. firstName/lastName/phone
 * live on User (set at signup) — this lets the applicant correct them here
 * without a separate account-settings flow.
 */
export async function upsertProfile(userId: string, input: UpsertProfileInput) {
  const { firstName, lastName, phone, ...profileFields } = input;

  const [, profile] = await prisma.$transaction([
    prisma.user.update({ where: { id: userId }, data: { firstName, lastName, phone } }),
    prisma.candidateProfile.upsert({
      where: { userId },
      create: { userId, ...profileFields },
      update: { ...profileFields },
    }),
  ]);

  return profile;
}
