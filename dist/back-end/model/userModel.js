"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    firstName: [String, "Please Provide Firstname"],
    lastName: [String, "Please Provide Lastname"],
    email: [String, "Please provide your valid email address"],
    sex: {
        type: String,
        enum: ["Male", "Female", "Others"],
        reduired: [true, "Please provide your gender"],
    },
    address: {
        country: {
            type: [String, "Please provide your country name"],
        },
        city: {
            type: [String, "Please provide city name"],
        },
    },
    phone: [String, "Please provide phone number"],
    website: [String, "Please provide website link"],
    role: {
        type: String,
        enum: ["Moderator", "User", "Editor"],
        reduired: [true, "Please provide your category"],
    },
    profession: {
        type: String,
        enum: ["Web Developer", "Software Engeneer", "Doctor", "Ethical Hacker"],
        reduired: [true, "Please provide your profession"],
    },
});
exports.default = model('User', userSchema);
