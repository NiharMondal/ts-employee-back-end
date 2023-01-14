"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
exports.default = AuthUsers;
