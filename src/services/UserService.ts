import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import Inquiry from "../models/inquiry";

const getUserInquiry = async (userId: string): Promise<UserResponseDto[]> => {
  try {
    const inquirys = await Inquiry.find({ userId });

    console.log(inquirys);
    const userResponseDtos: UserResponseDto[] = await Promise.all(
      inquirys.map((inquiry: InquiryInfo) => {
        const result = {
          inquiryId: inquiry.userId,
          question: inquiry.content,
          createdAt: inquiry.createdAt,
          answer: inquiry.answer,
          isAnswered: inquiry.answer ? true : false,
        };

        return result;
      }),
    );

    return userResponseDtos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getUserInquiry,
};
