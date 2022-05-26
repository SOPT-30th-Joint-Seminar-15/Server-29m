import mongoose from "mongoose";

export interface InquiryResponseDto {
  userId: mongoose.Types.ObjectId;
  orderNum?: mongoose.Types.ObjectId;
  email: string;
  title: string;
  content: string;
  inquiryCategory: string;
  isSubscribed: boolean;
}
