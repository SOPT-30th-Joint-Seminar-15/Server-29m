import mongoose from "mongoose";

export interface InquiryCreateDto {
  userId: mongoose.Types.ObjectId;
  orderNum?: mongoose.Types.ObjectId;
  email: string;
  title: string;
  content: string;
  isSubscribed: boolean;
  inquiryCategory: string;
  answer?: string;
}
