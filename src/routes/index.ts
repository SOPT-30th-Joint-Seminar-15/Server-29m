//router index file
import { Router } from "express";

import InquiryRouter from "./InquiryRouter";

const router = Router();

router.use("/", InquiryRouter);

export default router;
