import { isValidObjectId } from "mongoose";
import Inquiry from "../models/inquiry";

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
};
