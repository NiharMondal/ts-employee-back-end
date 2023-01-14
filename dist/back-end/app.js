"use strict";
// ================== app starts ==============
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
//import db
const db_1 = __importDefault(require("./db/db"));
dotenv_1.default.config();
(0, db_1.default)();
// ========== initializing app ============
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//root route
app.get("/", (req, res) => {
    res.send("Hello world");
});
const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
    console.log(`[Server]: app listening at http://localhost:${port}`);
});
exports.default = app;
