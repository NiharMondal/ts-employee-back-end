"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// ================== import app ==============
const app_1 = __importDefault(require("./app"));
app_1.default.use((0, cookie_parser_1.default)());
//import router
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const authRouts_1 = __importDefault(require("./routes/authRouts"));
// ===========use router =================
//user router
app_1.default.use("/api/v1/user", usersRoute_1.default);
//auth router
app_1.default.use("/api/v1/auth", authRouts_1.default);
