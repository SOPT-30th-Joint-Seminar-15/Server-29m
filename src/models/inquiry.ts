import mongoose from "mongoose";

import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import Order from "./order";
import User from "./user";

const inquirySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: User,
    },
    orderNum: {
      type: mongoose.Types.ObjectId,
      ref: Order,
    },
    email: {
      type: String,
    },
    inquiryCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Inquiry = mongoose.model<InquiryInfo & mongoose.Document>("Inquiry", inquirySchema);

export default Inquiry;
