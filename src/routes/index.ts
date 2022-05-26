//router index file
import { Router } from "express";

import OrderRouter from "./order";
import InquiryRouter from "./inquiry";

const router = Router();

router.use("/order", OrderRouter);
router.use("/inquiry", InquiryRouter);

export default router;
