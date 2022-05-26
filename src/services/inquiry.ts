import { isValidObjectId } from "mongoose";

import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import Inquiry from "../models/inquiry";
import User from "../models/user";

const createInquiry = async (inquiryCreateDto: InquiryCreateDto): Promise<PostBaseResponseDto | null> => {
  try {
    const user = await User.findById(inquiryCreateDto.userId);

    if (!user) {
      return null;
    }
    const newInquiry = new Inquiry({
      userId: inquiryCreateDto.userId,
      orderNum: inquiryCreateDto.orderNum,
      email: inquiryCreateDto.email,
      title: inquiryCreateDto.title,
      inquiryCategory: inquiryCreateDto.inquiryCategory,
      content: inquiryCreateDto.content,
      isSubscribed: inquiryCreateDto.isSubscribed,
      answer: inquiryCreateDto.answer ? inquiryCreateDto.answer : "",
    });

    await newInquiry.save();
    const data = {
      _id: newInquiry._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteInquiry = async (inquiryId: string) => {
  if (!inquiryId) {
    // 요청값(inquiryId)이 없을 때
    return -1;
  }

  if (!isValidObjectId(inquiryId)) {
    // inquiryId의 형식이 잘못되었을 때
    return -2;
  }

  const inquiry = await Inquiry.findById(inquiryId);

  if (!inquiry) {
    // db 상에 존재하지 않는 inquiry일 때
    return -3;
  }

  await Inquiry.findByIdAndDelete(inquiryId);

  return 0;
};

export default {
  deleteInquiry,
  createInquiry,
};
