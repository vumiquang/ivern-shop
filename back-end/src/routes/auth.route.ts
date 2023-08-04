import { Router } from "express";

import { validateBody } from "@/middleware/validate.middlwware";
import schema, { registerSchema } from "@/validates";
import prisma from "@/config/db";

import { registerUserController } from "@/controller/auth.controller";

const router: Router = Router();

router.post("/register", validateBody(registerSchema), registerUserController);

export default router;
