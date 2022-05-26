import mongoose from "mongoose";

import { OrderInfo } from "../interfaces/order/OrderInfo";
import User from "./user";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: User,
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
