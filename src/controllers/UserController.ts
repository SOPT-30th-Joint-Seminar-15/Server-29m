import express, { Request, Response } from "express";

import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { UserService } from "../services";

const getUserInquiry = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await UserService.getUserInquiry(userId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_USER_INQUIRY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getUserInquiry,
};
