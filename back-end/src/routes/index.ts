import { Router } from "express";

import userRouter from "./auth.route";

const router = Router();

router.use("/api", userRouter);

export default router;
