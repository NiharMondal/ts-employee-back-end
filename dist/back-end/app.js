"use strict";
// ================== app starts ==============
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
// const cookieParser = require("cookie-parser");
//import db
const connectDB = require("./db/db");
dotenv_1.default.config();
connectDB();
// ========== initializing app ============
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("Hello world");
});
(0, usersRoute_1.default)(app);
const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
    console.log(`[Server]: app listening at http://localhost:${port}`);
});
module.exports = app;