import mongoose from "mongoose";

export interface UserResponseDto {
  inquiryId: mongoose.Types.ObjectId;
  question: string;
  createdAt: Date;
  answer: string;
  isAnswered: boolean;
}
