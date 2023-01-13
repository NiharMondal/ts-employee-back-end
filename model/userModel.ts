import { timeStamp } from "console";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
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
    reduired: [true, "Please select your gender"],
  },
  contactInfo: {
    email: {
      type: String,
      required: [true, "Please Provide valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Please provide phone number"],
    },
    website: {
      type: String,
    },
  },
  address: {
    city: {
      type: String,
      required: [true, "Please provide city name"],
    },
    country: {
      type: String,
      required: [true, "Please provide country name"],
    },
  },
  role: {
    type: String,
    enum: {
      values: ["User", "Moderator", "Editor"],
      message: "Please Provide role",
    },
  },
  profession: {
    type: String,
    reduired: [true, "Please provide your profession"],
  },
},{timestamps: true});
const Users = model("Users-list", userSchema);

export default Users;
