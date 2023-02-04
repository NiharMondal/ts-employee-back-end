"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Users-list", userSchema);
