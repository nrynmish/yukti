import type { Request, Response } from "express";
import { writeAuditLog } from "../lib/audit.js";
import * as teamService from "../services/team.service.js";
import type { AddMemberInput, CreateTeamInput } from "../schemas/team.schema.js";

export async function createTeam(req: Request, res: Response) {
  const input = req.body as CreateTeamInput;
  const team = await teamService.createTeam(req.user!.id, input);
  await writeAuditLog({ req, userId: req.user!.id, action: "team_create", metadata: { teamId: team.id } });
  res.status(201).json({ team });
}

export async function getMyTeam(req: Request, res: Response) {
  const team = await teamService.getMyTeam(req.user!.id);
  res.status(200).json({ team });
}

export async function updateTeam(req: Request, res: Response) {
  const input = req.body as CreateTeamInput;
  const team = await teamService.updateTeam(req.params.teamId!, req.user!.id, input);
  await writeAuditLog({ req, userId: req.user!.id, action: "team_update", metadata: { teamId: team.id } });
  res.status(200).json({ team });
}

export async function addMember(req: Request, res: Response) {
  const input = req.body as AddMemberInput;
  const member = await teamService.addTeamMember(req.params.teamId!, req.user!.id, input);
  await writeAuditLog({
    req,
    userId: req.user!.id,
    action: "team_member_add",
    metadata: { teamId: req.params.teamId, memberEmail: member.email },
  });
  res.status(201).json({ member });
}

export async function removeMember(req: Request, res: Response) {
  await teamService.removeTeamMember(req.params.teamId!, req.user!.id, req.params.memberId!);
  await writeAuditLog({
    req,
    userId: req.user!.id,
    action: "team_member_remove",
    metadata: { teamId: req.params.teamId, memberId: req.params.memberId },
  });
  res.status(204).send();
}

export async function submitTeam(req: Request, res: Response) {
  const team = await teamService.submitTeam(req.params.teamId!, req.user!.id);
  await writeAuditLog({ req, userId: req.user!.id, action: "team_submit", metadata: { teamId: team.id } });
  res.status(200).json({ team });
}
