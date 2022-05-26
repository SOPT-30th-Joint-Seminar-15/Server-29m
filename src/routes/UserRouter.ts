import { Router } from "express";

import UserController from "../controllers/UserController";

const router = Router();

router.get("/:userId/inquiry", UserController.getUserInquiry);

export default router;
