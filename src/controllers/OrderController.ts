import { Request, Response } from "express"
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import OrderService from "../services/OrderService";

/**
 * @route GET /order/:orderNum 
 * @desc 주문 번호로 주문 상품 정보를 조회합니다.
 * @access Public
 */
const getOrderedInfo = async(req: Request, res: Response) => {
  const { orderNum } = req.params;

  if (!orderNum){
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const data = await OrderService.getOrderedInfo(orderNum);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.SUCCESS_READ_ORDER_NUM, data));
  } catch (err) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getOrderedInfo,
}