"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("./../controller/authController");
const authRouter = express_1.default.Router();
//register router
authRouter.post('/register', authController_1.userResiter);
//login router
authRouter.post("/login", authController_1.userLogin);
exports.default = authRouter;