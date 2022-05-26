import Inquiry from "../models/inquiry";

const deleteInquiry = async (inquiryId: string) => {
  try {
    await Inquiry.findByIdAndDelete(inquiryId);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw error;
  }
};

export default {
  deleteInquiry,
};
