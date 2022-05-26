import mongoose from "mongoose";

export interface UserResponseDto {
  userId: mongoose.Types.ObjectId;
  question: string;
  createdAt: Date;
  isAnswered: boolean;
  answer: string;
}
