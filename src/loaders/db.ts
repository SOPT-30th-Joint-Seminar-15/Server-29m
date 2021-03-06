import mongoose from "mongoose";

import config from "../config";
import Inquiry from "../models/inquiry";
import Order from "../models/order";
import User from "../models/user";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("πΈ λͺ½κ΅¬λͺ½κ΅¬μ€ μ°κ²° μλ£! πΈ");

    User.createCollection().then(function () {
      console.log("π User Collection is created!");
    });

    Order.createCollection().then(function () {
      console.log("π Order Collection is created!");
    });

    Inquiry.createCollection().then(function () {
      console.log("π InquiryInfo Collection is created!");
    });
  } catch (err) {
    if (err instanceof Error) {
      // νμΈμ© μ½μμ λ°°ν¬μ ν¬ν¨νμ§ μμ
      // μ€μ  λ°°ν¬μμλ μλ¬ λ‘κΉνλ λ‘μ§μ΄ μ¬κΈ° λ€μ΄κ° λ―!
      console.log("[ERROR] ", err.message);
      process.exit(1);
    }
  }
};

export default connectDB;
