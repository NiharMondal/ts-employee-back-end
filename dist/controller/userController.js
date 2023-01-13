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
const userModel_1 = __importDefault(require("../model/userModel"));
const errorHandler = (e) => {
    let errors = [];
    const allErrors = e.substring(e.indexOf(":") + 1).trim();
    const allErrorsInArrayFormat = allErrors.split(",").map((err) => err.trim());
    allErrorsInArrayFormat.forEach((error) => {
        const [key, value] = error.split(":").map((err) => err.trim());
        errors[key] = value;
    });
    return errors;
};
function adddUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, userName, gender, email, phone, website, city, country, role, profession, } = req.body;
        try {
            const createUser = yield userModel_1.default.create({
                firstName,
                lastName,
                userName,
                gender,
                contactInfo: {
                    email,
                    phone,
                    website,
                },
                address: { city, country },
                role,
                profession,
            });
            yield createUser.save();
            return res
                .status(201)
                .json({ success: "You have added user successfully!" });
        }
        catch (error) {
            return res.status(400).json({ error: "Please Provide every input field" });
        }
    });
}
exports.default = adddUser;
