"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import controller
const userController_1 = require("../controller/userController");
const userRouter = express_1.default.Router();
//create user
userRouter.post("/", userController_1.createUser);
//get all users and single user by id
userRouter.get("/", userController_1.getAllUsers).get("/:id", userController_1.getUserById);
//delete and update user
userRouter.delete("/:id", userController_1.deleteUser).put("/:id", userController_1.updateUser);
exports.default = userRouter;
