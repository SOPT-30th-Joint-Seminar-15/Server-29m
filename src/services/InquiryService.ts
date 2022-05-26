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
      content: inquiryCreateDto.content,
      isSubscribed: inquiryCreateDto.isSubscribed,
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

export default {
  createInquiry,
};
