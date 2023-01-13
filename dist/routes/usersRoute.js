"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const userRouter = express_1.default.Router();
userRouter.get('/', (req, res) => {
    res.send("router is working");
}).post("/add-user", userController_1.default);
exports.default = userRouter;
