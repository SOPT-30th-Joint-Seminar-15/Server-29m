import express, { Request, Response } from "express";

import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { InquiryService } from "../services";

const { validationResult } = require("express-validator");
/**
 *  @route POST /user/inquiry
 *  @desc POST inquiry
 *  @access Public
 */

const createInquiry = async (req: Request, res: Response) => {
  const inquiryCreateDto: InquiryCreateDto = req.body;
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const data = await InquiryService.createInquiry(inquiryCreateDto);

    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.CREATE_INQUIRY_FAIL));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.CREATE_INQUIRY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createInquiry,
};
