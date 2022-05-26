import { InquiryInfo } from "../interfaces/inquiry/InquiryInfo";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import Inquiry from "../models/inquiry";

const getUserInquiry = async (userId: string): Promise<UserResponseDto[]> => {
  try {
    const inquirys = await Inquiry.find({ "userId": userId });

    const userResponseDtos: UserResponseDto[] = await Promise.all(
      inquirys.map((inquiry: InquiryInfo) => {
        let isAnswered = false;
        if (inquiry.answer) {
            isAnswered = true;
        }
        const result = {
          inquiryId: inquiry._id,
          question: inquiry.content,
          createdAt: inquiry.createdAt,
          answer: inquiry.answer,
          isAnswered: isAnswered,
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
