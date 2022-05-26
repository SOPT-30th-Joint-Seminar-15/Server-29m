import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { InquiryCreateDto } from "../interfaces/inquiry/InquiryCreateDto";
import { InquiryCreateResponseDto } from "../interfaces/inquiry/InquiryCreateResponseDto";
import Inquiry from "../models/inquiry";
import User from "../models/user";

const createInquiry = async (inquiryCreateDto: InquiryCreateDto): Promise<InquiryCreateResponseDto | null> => {
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
      content: inquiryCreateDto.content,
      isSubscribed: inquiryCreateDto.isSubscribed,
      inquiryCategory: inquiryCreateDto.inquiryCategory,
    });

    await newInquiry.save();

    const data = await {
      _id: newInquiry._id,
      inquiry: newInquiry.inquiryCategory,
      orderNum: newInquiry.orderNum,
      title: newInquiry.title,
      content: newInquiry.content,
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
