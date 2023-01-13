"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userResiter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authModel_1 = __importDefault(require("../model/authModel"));
//user registration
const userResiter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (password.length < 5) {
        return res.status(400).json({ error: "Password must be 5 character" });
    }
    try {
        const oldUser = yield authModel_1.default.findOne({ email: email });
        if (oldUser) {
            return res.json({ error: "User alreay exist" });
        }
        const createUser = yield authModel_1.default.create({
            username,
            email,
            password: yield bcrypt_1.default.hash(password, 12),
        });
        yield createUser.save();
        return res.status(201).json({ success: "Registration successfull" });
    }
    catch (error) {
        return res.status(400).json({ error: "Please Provide every input field" });
    }
});
exports.userResiter = userResiter;
//user login
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Please provide email address" });
    }
    if (!password) {
        return res.status(400).json({ error: "Please provide your password" });
    }
    try {
        const checkUser = yield authModel_1.default.findOne({ email: email });
        if (!checkUser) {
            return res.json({ error: "User does not exist" });
        }
        const matchPass = yield bcrypt_1.default.compare(password, checkUser.password);
        if (!matchPass) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        return res.status(200).json({ success: "Login successfull" });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.userLogin = userLogin;
