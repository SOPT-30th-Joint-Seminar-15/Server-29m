import { Request, Response } from "express";
import { validationResult } from "express-validator/check";

import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { InquiryService } from "../services";

/**
 *  @route POST /user/inquiry
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
    const data: PostBaseResponseDto = await InquiryService.createInquiry(inquiryCreateDto);

    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.CREATE_INQUIRY_FAIL));
    }

    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_INQUIRY_SUCCESS, data));
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
