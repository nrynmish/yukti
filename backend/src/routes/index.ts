import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { teamRouter } from "./team.routes.js";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/register", teamRouter);

apiRouter.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));
