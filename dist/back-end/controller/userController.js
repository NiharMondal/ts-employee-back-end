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
exports.updateUser = exports.deleteUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
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
//create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            address: {
                city,
                country,
            },
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
exports.createUser = createUser;
// get all user
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield userModel_1.default.find({});
        if (allUsers) {
            return res.status(200).json({
                success: "Please Wait! We are geting your information",
                allUsers,
            });
        }
        return res.status(400).json({ error: "Something went wrong" });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllUsers = getAllUsers;
//get user by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = yield req.params;
        const findById = yield userModel_1.default.findById({ _id: id });
        if (!findById) {
            return res.status(400).json({ error: "Id not found!" });
        }
        return res
            .status(200)
            .json({ success: "Here is your information", findById });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getUserById = getUserById;
//delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = yield req.params;
        const deleteUser = yield userModel_1.default.deleteOne({ _id: id });
        if (deleteUser) {
            return res
                .status(200)
                .json({ success: "User has been deleted successfully" });
        }
    }
    catch (error) {
        return res.status(404).json({ error: "User is not found!" });
    }
});
exports.deleteUser = deleteUser;
//update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    try {
        const updateById = yield userModel_1.default.updateOne({ _id: id }, { $set: { firstName: firstName, lastName: lastName } });
        if (updateById) {
            return res
                .status(200)
                .json({ success: "User has been updated successfully" });
        }
    }
    catch (error) {
        res.status(404).json({ error: "Could not update user" });
    }
});
exports.updateUser = updateUser;
