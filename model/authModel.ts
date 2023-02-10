import { Schema, model } from "mongoose";
import { RegisterRequest } from "../modelTypes/types";


const authSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide your username"],
  },
  email: {
    type: String,
    required: [true, "Please provide your password"],
    unique: [true, "This email has been taken"]
  },
  password: {
    type: String,
    required: [true, "Password can not be empty"],
  },
});

export default  model<RegisterRequest>("AuthUsers", authSchema);
