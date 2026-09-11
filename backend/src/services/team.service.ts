import type { Prisma, TeamMember } from "@prisma/client";
import { prisma } from "../config/prisma.js";
import { AppError } from "../middleware/errorHandler.js";
import { TEAM_MAX_MEMBERS, TEAM_MIN_MEMBERS } from "../schemas/team.schema.js";
import type { AddMemberInput, CreateTeamInput } from "../schemas/team.schema.js";
import { sendTeamMemberAddedEmail, sendTeamRegistrationEmail } from "../utils/mailer.js";

export async function createTeam(leaderUserId: string, input: CreateTeamInput) {
  const existing = await prisma.team.findFirst({ where: { leaderUserId } });
  if (existing) {
    throw new AppError(409, "You have already registered a team.");
  }

  const leader = await prisma.user.findUniqueOrThrow({ where: { id: leaderUserId } });

  // Create the team and seed the leader as the first team_members row in
  // one transaction, so team_members is always the single source of truth
  // for roster membership (no team can exist with zero members).
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const team = await tx.team.create({
      data: {
        name: input.name,
        institute: input.institute,
        theme: input.theme,
        problemStatement: input.problemStatement,
        leaderUserId,
      },
    });

    await tx.teamMember.create({
      data: {
        teamId: team.id,
        userId: leader.id,
        firstName: leader.firstName,
        lastName: leader.lastName,
        email: leader.email,
        phone: leader.phone,
        role: "leader",
      },
    });

    return team;
  });
}

export async function updateTeam(teamId: string, leaderUserId: string, input: CreateTeamInput) {
  await getOwnedTeamOrThrow(teamId, leaderUserId); // also enforces draft-only via its status check

  return prisma.team.update({
    where: { id: teamId },
    data: {
      name: input.name,
      institute: input.institute,
      theme: input.theme,
      problemStatement: input.problemStatement,
    },
  });
}

async function getOwnedTeamOrThrow(teamId: string, leaderUserId: string) {
  const team = await prisma.team.findUnique({ where: { id: teamId }, include: { members: true } });

  if (!team) throw new AppError(404, "Team not found.");
  if (team.leaderUserId !== leaderUserId) throw new AppError(403, "Not authorized for this team.");
  if (team.status !== "draft") throw new AppError(409, "Team has already been submitted and can no longer be edited.");

  return team;
}

export async function addTeamMember(teamId: string, leaderUserId: string, input: AddMemberInput) {
  const team = await getOwnedTeamOrThrow(teamId, leaderUserId);

  if (team.members.length >= TEAM_MAX_MEMBERS) {
    throw new AppError(409, `A team can have at most ${TEAM_MAX_MEMBERS} members.`);
  }

  if (team.members.some((m: TeamMember) => m.email === input.email)) {
    throw new AppError(409, "This email is already part of the team.");
  }

  // Members are recorded as data, not required to hold a user account.
  // If someone with this email has an account, we still don't auto-link
  // it — see design note in memory: identity claiming is a separate,
  // explicit flow (not implemented here), not an automatic email match.
  const newMember = await prisma.teamMember.create({
    data: {
      teamId,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      role: "member",
    },
  });

  const leader = team.members.find((m: TeamMember) => m.role === "leader");
  const leaderName = leader ? `${leader.firstName} ${leader.lastName}` : "Your team leader";

  sendTeamMemberAddedEmail(
    newMember.email,
    { firstName: newMember.firstName, lastName: newMember.lastName },
    { name: team.name, institute: team.institute, theme: team.theme },
    leaderName,
  ).catch(() => {
    // Handled & logged in mailer
  });

  return newMember;
}

export async function removeTeamMember(teamId: string, leaderUserId: string, memberId: string) {
  const team = await getOwnedTeamOrThrow(teamId, leaderUserId);

  const member = team.members.find((m: TeamMember) => m.id === memberId);
  if (!member) throw new AppError(404, "Member not found.");
  if (member.role === "leader") throw new AppError(400, "The team leader cannot be removed.");

  await prisma.teamMember.delete({ where: { id: memberId } });
}

export async function submitTeam(teamId: string, leaderUserId: string) {
  const team = await getOwnedTeamOrThrow(teamId, leaderUserId);

  if (team.members.length < TEAM_MIN_MEMBERS) {
    throw new AppError(400, `A team needs at least ${TEAM_MIN_MEMBERS} members to submit.`);
  }

  const updatedTeam = await prisma.team.update({
    where: { id: teamId },
    data: { status: "submitted", submittedAt: new Date() },
    include: { members: true },
  });

  // Send confirmation email to all team members including leader
  const recipients = updatedTeam.members.map((m: TeamMember) => m.email);
  sendTeamRegistrationEmail(recipients, updatedTeam).catch(() => {
    // Handled & logged in mailer
  });

  return updatedTeam;
}

export async function getMyTeam(leaderUserId: string) {
  return prisma.team.findFirst({
    where: { leaderUserId },
    include: { members: true },
  });
}