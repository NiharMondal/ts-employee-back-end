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
exports.userLogin = exports.userRegister = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authModel_1 = __importDefault(require("../model/authModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//user registration
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Please provide every input field" });
    }
    if (password.length < 5) {
        return res.status(400).json({ error: "Password must be 5 character" });
    }
    try {
        const oldUser = yield authModel_1.default.findOne({ email: email });
        if (oldUser) {
            return res.status(400).json({ error: "User alreay exist" });
        }
        const createdUser = yield authModel_1.default.create({
            username,
            email,
            password: yield bcrypt_1.default.hash(password, 12),
        });
        createdUser.save((err) => {
            if (!err) {
                const token = jsonwebtoken_1.default.sign({ _id: createdUser._id, email: createdUser.email }, process.env.TOKEN_SECRET, {
                    expiresIn: "5m",
                });
                return res
                    .cookie("auth_token", token)
                    .status(200)
                    .json({
                    user: {
                        _id: createdUser._id,
                        email: createdUser.email,
                        username: createdUser.username,
                    },
                    token: token,
                });
            }
        });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.userRegister = userRegister;
//user login
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password required" });
        }
        const checkUser = yield authModel_1.default.findOne({ email: email });
        if (!checkUser) {
            return res.status(401).json({ error: "User does not exist" });
        }
        const matchPass = yield bcrypt_1.default.compare(password, checkUser.password);
        if (!matchPass) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ _id: checkUser._id, email: checkUser.email }, process.env.TOKEN_SECRET, {
            expiresIn: "5m",
        });
        return res
            .cookie("auth_token", token, { httpOnly: true })
            .status(200)
            .json({
            user: { _id: checkUser._id, email: checkUser.email, username: checkUser.username },
            token: token,
        });
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
});
exports.userLogin = userLogin;
