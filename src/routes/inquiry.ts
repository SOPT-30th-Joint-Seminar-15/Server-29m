import { Router } from "express";

import { inquiryController } from "../controllers";

const router: Router = Router();

router.delete("/:inquiryId", inquiryController.deleteInquiry);

export default router;
