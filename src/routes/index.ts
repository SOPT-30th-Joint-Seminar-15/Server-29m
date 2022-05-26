//router index file
import { Router } from "express";

import InquiryRouter from "./InquiryRouter";
import UserRouter from "./UserRouter";
const router = Router();

router.use("/inquiry", InquiryRouter);
router.use("/user", UserRouter);
export default router;
