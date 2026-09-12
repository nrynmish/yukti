import { Router } from "express";
import * as profileController from "../controllers/profile.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { requireAuth, requireVerifiedEmail } from "../middleware/auth.middleware.js";
import { upsertProfileSchema } from "../schemas/profile.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const profileRouter = Router();

// Same gate as team registration - the dossier only opens once signup +
// email verification are done.
profileRouter.use(requireAuth, requireVerifiedEmail);

profileRouter.get("/", asyncHandler(profileController.getProfile));
profileRouter.put("/", validateBody(upsertProfileSchema), asyncHandler(profileController.upsertProfile));
