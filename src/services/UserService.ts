import { InquiryInfoWithId } from "../interfaces/inquiry/InquiryInfoWithId";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import Inquiry from "../models/inquiry";
import { convertDateForm } from "../modules/convertDateForm";

const getUserInquiry = async (userId: string): Promise<UserResponseDto[]> => {
  try {
    const inquirys = await Inquiry.find({ userId });

    const userResponseDtos: UserResponseDto[] = await Promise.all(
      inquirys.map((inquiry: InquiryInfoWithId) => {
        const result = {
          inquiryId: inquiry._id,
          inquiryCategory: inquiry.inquiryCategory,
          question: inquiry.content,
          answer: inquiry.answer,
          isAnswered: inquiry.answer ? true : false,
          createdAt: convertDateForm(inquiry.createdAt),
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
