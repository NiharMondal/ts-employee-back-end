import { Schema, model } from "mongoose";
import { TUser } from "../modelTypes/types";

const userSchema = new Schema<TUser>(
  {
    firstName: {
      type: String,
      required: [true, "Please Provide Firstname"],
    },
    lastName: {
      type: String,
      required: [true, "Please Provide Lastname"],
    },

    userName: {
      type: String,
      required: [true, "Please Provide your username"],
    },
    gender: {
      type: String,
      reduired: [true, "Please provide your gender"],
    },

    email: {
      type: String,
      required: [true, "Please Provide valid email address"],
    },
    age: {
      type: String,
      required: [true, "Please Provide your age"],
    },

    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Users-list", userSchema);
