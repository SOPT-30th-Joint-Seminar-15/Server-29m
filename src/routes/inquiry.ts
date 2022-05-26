import { Router } from "express";
import { body } from "express-validator/check";

import { inquiryController, UserController } from "../controllers";

const router: Router = Router();

router.post(
  "/user",
  [
    body("userId").notEmpty(),
    body("email").notEmpty(),
    body("email").isEmail(),
    body("inquiryCategory").notEmpty(),
    body("title").notEmpty(),
    body("content").notEmpty(),
    body("isSubscribed").notEmpty(),
  ],
  inquiryController.createInquiry,
);
router.delete("/:inquiryId", inquiryController.deleteInquiry);

export default router;
