//router index file
import { Router } from "express";

import InquiryRouter from "./inquiry";
import OrderRouter from "./order";

const router = Router();

router.use("/order", OrderRouter);
router.use("/inquiry", InquiryRouter);

export default router;
