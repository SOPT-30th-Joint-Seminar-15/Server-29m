import mongoose from "mongoose";

import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import Order from "./order";
import User from "./user";

const inquirySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    unique: true,
    ref: User,
  },
  orderNum: {
    type: mongoose.Types.ObjectId,
    unique: true,
    ref: Order,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const Inquiry = mongoose.model<InquiryInfo & mongoose.Document>("Inquiry", inquirySchema);

export default Inquiry;
