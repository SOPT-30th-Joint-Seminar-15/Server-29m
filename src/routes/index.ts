//router index file
import { Router } from "express";

import InquiryRouter from "./inquiry";
import OrderRouter from "./order";
import UserRouter from "./UserRouter";
const router = Router();

router.use("/order", OrderRouter);
router.use("/inquiry", InquiryRouter);
router.use("/user", UserRouter);
export default router;
