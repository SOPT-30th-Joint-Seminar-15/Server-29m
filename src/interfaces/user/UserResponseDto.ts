import mongoose from "mongoose";

export interface UserResponseDto {
  inquiryId: mongoose.Types.ObjectId;
  inquiryCategory: string;
  question: string;
  createdAt: string;
  answer: string;
  isAnswered: boolean;
}
