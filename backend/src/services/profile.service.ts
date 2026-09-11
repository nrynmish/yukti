import { prisma } from "../config/prisma.js";
import type { UpsertProfileInput } from "../schemas/profile.schema.js";

export async function getMyProfile(userId: string) {
  const [user, profile] = await Promise.all([
    prisma.user.findUniqueOrThrow({
      where: { id: userId },
      // Matches the `User` shape the frontend types this response as
      // (id + emailVerified included, same as /api/auth/me) — omitting them
      // here silently returns `undefined` to anything that reads them.
      select: { id: true, firstName: true, lastName: true, email: true, phone: true, emailVerified: true },
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
 *
 * Optional fields the frontend clears are sent as absent keys (JSON drops
 * `undefined` values), which Prisma would otherwise interpret as "leave
 * unchanged" rather than "clear" — normalizing them to `null` here is what
 * makes this an actual full replacement instead of a merge.
 */
export async function upsertProfile(userId: string, input: UpsertProfileInput) {
  const { firstName, lastName, phone, middleName, category, addressLine2, alternatePhone, backupEmail, ...rest } =
    input;

  const profileData = {
    ...rest,
    middleName: middleName ?? null,
    category: category ?? null,
    addressLine2: addressLine2 ?? null,
    alternatePhone: alternatePhone ?? null,
    backupEmail: backupEmail ?? null,
  };

  const [, profile] = await prisma.$transaction([
    prisma.user.update({ where: { id: userId }, data: { firstName, lastName, phone } }),
    prisma.candidateProfile.upsert({
      where: { userId },
      create: { userId, ...profileData },
      update: profileData,
    }),
  ]);

  return profile;
}
