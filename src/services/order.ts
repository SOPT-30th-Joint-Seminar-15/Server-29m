import Order from "../models/order";

const getOrderInfo = async (orderNum: string) => {
  try {
    const orderInfo = await Order.find({
      _id: orderNum,
    });

    return orderInfo;
  } catch (err) {
    if (err instanceof Error) {
      console.log("[ERROR]", err.message);
    }
    throw err;
  }
};

export default {
  getOrderInfo,
};
