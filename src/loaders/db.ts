import mongoose from "mongoose";

import config from "../config";
import inquiryInfo from "../models/inquiryInfo";
import order from "../models/order";
import user from "../models/user";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("🌸 몽구몽구스 연결 완료! 🌸");

    user.createCollection().then(function () {
      console.log("📌 User Collection is created!");
    });

    order.createCollection().then(function () {
      console.log("📌 Order Collection is created!");
    });

    inquiryInfo.createCollection().then(function () {
      console.log("📌 InquiryInfo Collection is created!");
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
