import express, { Request, Response } from "express";

import { Inquiry } from "../interfaces/User";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";

/**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */
const createUser = async (req: Request, res: Response) => {
  const inquiry: Inquiry = {
    _id: "blah",
    question: "skdjlkfjdskf",
    createdAt: "dksfdklj",
    answer: "sljfdljf",
    isAnswered: true,
  };

  return inquiry;
};

export default {
  createUser,
};
