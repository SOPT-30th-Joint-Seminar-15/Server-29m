import mongoose from "mongoose";

import { UserInfo } from "../interfaces/user/UserInfo";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model<UserInfo & mongoose.Document>("User", userSchema);

export default User;
