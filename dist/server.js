"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ================== import app ==============
const app_1 = __importDefault(require("./app"));
//import router
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const authRouts_1 = __importDefault(require("./routes/authRouts"));
//use router
//user router
app_1.default.use("/api/v1/users/", usersRoute_1.default);
app_1.default.use("/api/v1/auth", authRouts_1.default);
