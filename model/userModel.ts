import { Schema, model } from "mongoose";
import { TUser } from "../modelTypes/types";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide name"],
    },
    email: {
      type: String,
      required: [true, "Please provide valid email address"],
    },

    gender: {
      type: String,
      reduired: [true, "Please provide your gender"],
    },

    age: {
      type: Number,
      required: [true, "Please provide your age"],
    },
    salary: {
      type: Number,
      required: [true, "Please provide user salary"],
    },
    role: {
      type: String,
      required: [true, "Please provide user role"],
    },
    status: {
      type: String,
      required: [true, "Please provide status"],
    },

    country: {
      type: String,
      required: [true, "Please provide country"],
    },
  },
  { timestamps: true }
);

export default model<TUser>("Users-list", userSchema);
