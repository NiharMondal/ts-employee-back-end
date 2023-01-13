import mongoose from "mongoose";

const { Schema, model } = mongoose;

const registerSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide your username"],
  },
  email: {
    type: String,
    required: [true, "Please provide your password"],
  },
  password: {
    type: String,
    required: [true, "Please set your password"],
  },
});

const AuthUsers = model("AuthUsers", registerSchema);
export default AuthUsers;
