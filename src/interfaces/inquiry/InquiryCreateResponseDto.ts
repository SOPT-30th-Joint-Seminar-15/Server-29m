import mongoose from "mongoose";

export interface InquiryCreateResponseDto {
  _id: mongoose.Types.ObjectId;
  orderNum?: mongoose.Types.ObjectId;
  title: string;
  content: string;
  inquiry: string;
}
