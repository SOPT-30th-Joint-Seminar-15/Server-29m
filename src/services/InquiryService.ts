import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import Inquiry from "../models/inquiry";

const createInquiry = async (inquiryCreateDto: InquiryCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const inquiry = new Inquiry({
      userId: inquiryCreateDto.userId,
      orderNum: inquiryCreateDto.orderNum,
      email: inquiryCreateDto.email,
      title: inquiryCreateDto.title,
      inquiryCategory: inquiryCreateDto.inquiryCategory,
      content: inquiryCreateDto.content,
      isSubscribed: inquiryCreateDto.isSubscribed,
    });

    await inquiry.save();

    const data = {
      _id: inquiry._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createInquiry,
};
