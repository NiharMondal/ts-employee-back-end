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
exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUserByQuery = exports.getAllUsers = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
//create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, gender, age, email, role } = req.body;
    try {
        const createdUser = yield userModel_1.default.create({
            firstName,
            lastName,
            userName,
            email,
            gender,
            age,
            role,
        });
        createdUser.save((err) => {
            if (!err) {
                return res.status(201).json({
                    success: "You have added user successfully",
                });
            }
        });
    }
    catch (error) {
        return res.status(400).json({ error: "Please Provide every input field" });
    }
});
exports.createUser = createUser;
// get all user and also by queryString
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { gender, role } = req.query;
    try {
        //filter only by gender
        if (gender && !role) {
            const filterByGender = yield userModel_1.default.find({ gender: gender });
            return res.status(200).json(filterByGender);
        }
        //filter only by role
        if (!gender && role) {
            const filterByrole = yield userModel_1.default.find({ role: role });
            return res.status(200).json(filterByrole);
        }
        //filter using both gender and role
        if (gender && role) {
            const filterByGender = yield userModel_1.default.find({
                gender: gender,
                role: role,
            });
            return res.status(200).json(filterByGender);
        }
        //without query
        const allUsers = yield userModel_1.default.find();
        return res.status(200).json(allUsers);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllUsers = getAllUsers;
const getUserByQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("query: ", req.query);
    try {
        if (req.query) {
            const queryUsers = yield userModel_1.default.find(req.query);
            return res.status(200).json(queryUsers);
        }
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getUserByQuery = getUserByQuery;
//get user by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const findById = yield userModel_1.default.findById({ _id: id });
        if (!findById) {
            return res.status(404).json({ error: "Id not found!" });
        }
        return res.status(200).json(findById);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getUserById = getUserById;
//delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
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
    const { firstName, lastName, userName, email, gender, age, role } = req.body;
    //set update field
    try {
        const updateById = yield userModel_1.default.updateOne({ _id: id }, {
            $set: {
                firstName,
                lastName,
                email,
                userName,
                gender,
                age,
                role,
            },
        });
        if (updateById) {
            return res.status(200).json({
                success: "User has been updated successfully",
            });
        }
    }
    catch (error) {
        res.status(404).json({ error: "Could not update user" });
    }
});
exports.updateUser = updateUser;
