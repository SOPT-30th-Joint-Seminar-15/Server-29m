import { Router } from "express";
import { body } from "express-validator/check";

import { InquiryController } from "../controllers";

const router = Router();

router.post(
  "/user/inquiry",
  [
    body("userId").notEmpty(),
    body("inquiryCategory").notEmpty(),
    body("orderNum").notEmpty(),
    body("title").notEmpty(),
    body("content").notEmpty(),
  ],
  InquiryController.createInquiry,
);
