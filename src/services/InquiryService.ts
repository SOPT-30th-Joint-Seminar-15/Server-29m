import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import { InquiryResponseDto } from "../interfaces/inquiry/InquiryResponseDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import Inquiry from "../models/inquiry";
import User from "../models/user";

const createInquiry = async (
  inquiryCreateDto: InquiryCreateDto,
): Promise<PostBaseResponseDto | InquiryResponseDto | null> => {
  const inquiryRes = await User.findById(inquiryCreateDto.userId);

  if (!inquiryRes) return null;

  try {
    const inquiry = new Inquiry({
      userId: inquiryCreateDto.userId,
      orderNum: inquiryCreateDto.orderNum,
      email: inquiryCreateDto.email,
      title: inquiryCreateDto.title,
      inquiryCategory: inquiryCreateDto.inquiryCategory,
      content: inquiryCreateDto.content,
      isSubscribed: inquiryCreateDto.isSubscribed,
      answer: inquiryCreateDto.answer ? inquiryCreateDto.answer: " ",
    });

    await inquiry.save();

    const data = {
      _id: inquiry._id,
      inquiryCategory: inquiry.inquiryCategory,
      orderNum: inquiry.orderNum,
      title: inquiry.title,
      content: inquiry.content,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getInquiry = async (userId: string): Promise<UserResponseDto[]> => {
  try {
    const inquiries = await Inquiry.find({ userId });

    const data = inquiries.map((inquiry: InquiryInfo) => {
      const result = {
        userId: inquiry.userId,
        question: inquiry.content,
        createdAt: inquiry.createAt,
        isAnswered: true,
        answer: inquiry.answer,
      };

      return result;
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createInquiry,
  getInquiry,
};
