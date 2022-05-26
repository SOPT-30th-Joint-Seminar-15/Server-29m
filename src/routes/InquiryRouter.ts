import { Router } from "express";
import { body } from "express-validator/check";

import InquiryController from "../controllers/InquiryController";

const router: Router = Router();

router.post(
  "/user",
  [
    body("userId").notEmpty(),
    body("email").notEmpty(),
    body("inquiryCategory").notEmpty(),
    body("orderNum").notEmpty(),
    body("title").notEmpty(),
    body("content").notEmpty(),
    body("isSubscribed").notEmpty(),
  ],
  InquiryController.createInquiry,
);

export default router;
