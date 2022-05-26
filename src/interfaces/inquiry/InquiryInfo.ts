import mongoose from "mongoose";

export interface InquiryInfo {
  userId: mongoose.Types.ObjectId;
  orderNum: mongoose.Types.ObjectId;
  email: string;
  title: string;
  content: string;
  isSubscribed: boolean;
  inquiryCategory: string;
  createdAt: Date;
  answer: string;
}
