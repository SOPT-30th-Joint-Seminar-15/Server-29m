import mongoose from "mongoose";

import config from "../config";
import Inquiry from "../models/inquiry";
import Order from "../models/order";
import User from "../models/user";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("🌸 몽구몽구스 연결 완료! 🌸");

    User.createCollection().then(function () {
      console.log("📌 User Collection is created!");
    });

    Order.createCollection().then(function () {
      console.log("📌 Order Collection is created!");
    });

    Inquiry.createCollection().then(function () {
      console.log("📌 InquiryInfo Collection is created!");
    });
  } catch (err) {
    if (err instanceof Error) {
      // 확인용 콘솔은 배포에 포함하지 않음
      // 실제 배포에서는 에러 로깅하는 로직이 여기 들어갈 듯!
      console.log("[ERROR] ", err.message);
      process.exit(1);
    }
  }
};

export default connectDB;
