import mongoose from "mongoose";

import { OrderInfo } from "../interfaces/order/OrderInfo";
import user from "./user";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: user,
  },
  productName: {
    type: String,
  },
  orderDate: {
    type: Date,
  },
  payMethod: {
    type: String,
  },
});

const Order = mongoose.model<OrderInfo & mongoose.Document>("Order", orderSchema);

export default Order;
