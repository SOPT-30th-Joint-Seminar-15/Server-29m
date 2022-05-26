import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import { InquiryResponseDto } from "../interfaces/inquiry/InquiryResponseDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import InquiryService from "../services/InquiryService";

/**
 *  @route POST /inquiry
 *  @desc Create inquiry
 *  @access Public
 */
const createInquiry = async (req: Request, res: Response) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }
  const inquiryCreateDto: InquiryCreateDto = req.body;

  try {
    const data: PostBaseResponseDto | InquiryResponseDto | null = await InquiryService.createInquiry(inquiryCreateDto);

    if (!data) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_INQUIRY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

/**
 *  @route GET /inquiry
 *  @desc Get inquiry
 *  @access Public
 */

const getInquiry = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await InquiryService.getInquiry(userId);

    console.log("hey", data);

    if (!data) res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.READ_INQUIRY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createInquiry,
  getInquiry,
};
