import { Request, Response } from "express";

import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { InquiryService } from "../services";

/**
 * @route DELETE /inquiry/:inquiryId
 * @desc 문의 번호로 문의를 삭제합니다.
 * @access Public
 */
const deleteInquiry = async (req: Request, res: Response) => {
  const { inquiryId } = req.params;

  if (!inquiryId) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const result = await InquiryService.deleteInquiry(inquiryId);
    switch (result) {
      case -1:
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "🧐 inquiryId값이 없습니다."));
        break;
      case -2:
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "🤔 inquiryId의 형식을 다시 확인해주세요."))
        break;
      case -3:
        res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        break;
      default:
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.SUCCESS_DELETE_INQUIRY));
    }
  } catch (err) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default { deleteInquiry };
