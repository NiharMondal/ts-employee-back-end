"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const authSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("AuthUsers", authSchema);
