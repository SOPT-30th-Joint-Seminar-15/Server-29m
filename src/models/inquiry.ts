import mongoose from "mongoose";

import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import Order from "./order";
import User from "./user";

const inquirySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: User,
    },
    orderNum: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: Order,
    },
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isSubcribed: {
      type: Boolean,
      required: true,
    },
    inquiryCategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Inquiry = mongoose.model<InquiryInfo & mongoose.Document>("Inquiry", inquirySchema);

export default Inquiry;
