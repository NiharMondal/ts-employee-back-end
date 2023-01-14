"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const userRouter = express_1.default.Router();
//create user
userRouter.post("/", userController_1.createUser);
//get all users
userRouter.get("/", userController_1.getAllUsers).get("/:id", userController_1.getUserById);
//delete  user
userRouter.delete("/:id", userController_1.deleteUser);
//update user
userRouter.patch("/:id", userController_1.updateUser);
exports.default = userRouter;
