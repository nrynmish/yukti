import { Router } from "express";
import * as teamController from "../controllers/team.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { requireAuth, requireVerifiedEmail } from "../middleware/auth.middleware.js";
import { createTeamSchema, addMemberSchema } from "../schemas/team.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const teamRouter = Router();

// Every route here requires a signed-in, email-verified user — team
// registration is only reachable after signup + OTP verification + signin.
teamRouter.use(requireAuth, requireVerifiedEmail);

teamRouter.post("/", validateBody(createTeamSchema), asyncHandler(teamController.createTeam));
teamRouter.get("/me", asyncHandler(teamController.getMyTeam));
teamRouter.post(
  "/:teamId/members",
  validateBody(addMemberSchema),
  asyncHandler(teamController.addMember),
);
teamRouter.delete("/:teamId/members/:memberId", asyncHandler(teamController.removeMember));
teamRouter.post("/:teamId/submit", asyncHandler(teamController.submitTeam));
