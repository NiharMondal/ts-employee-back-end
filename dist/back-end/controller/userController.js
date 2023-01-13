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
const usersApi_1 = require("./../../front-end/src/redux/api/usersApi");
const userModel_1 = __importDefault(require("../model/userModel"));
function adddUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, email, userName, sex, city, country, phone, role, profession } = req.body;
        try {
            const createUser = yield userModel_1.default.create({ firstName, lastName, email, usersApi: usersApi_1.usersApi });
        }
        catch (err) {
        }
    });
}
exports.default = adddUser;
;
