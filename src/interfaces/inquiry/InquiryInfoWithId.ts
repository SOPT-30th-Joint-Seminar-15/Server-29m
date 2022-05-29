import mongoose from "mongoose";

import { InquiryInfo } from "./InquiryInfo";

export interface InquiryInfoWithId extends InquiryInfo {
  _id: mongoose.Types.ObjectId;
}
