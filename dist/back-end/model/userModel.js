"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
        required: true
    },
    profession: {
        type: String,
        reduired: true
    },
}, { timestamps: true });
const Users = model("Users-list", userSchema);
exports.default = Users;
