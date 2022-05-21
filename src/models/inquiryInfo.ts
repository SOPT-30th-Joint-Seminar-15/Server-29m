import mongoose from "mongoose";

import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import order from "./order";
import user from "./user";

const InquirySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    unique: true,
    ref: user,
  },
  orderNum: {
    type: mongoose.Types.ObjectId,
    unique: true,
    ref: order,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

export default mongoose.model<InquiryInfo & mongoose.Document>("Inquiry", InquirySchema);
