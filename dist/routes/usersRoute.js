"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import controller
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
//create and get all users
userRouter.post("/", userController_1.createUser).get("/", userController_1.getAllUsers);
userRouter
    //get single user by id
    .get("/:id", userController_1.getUserById)
    //delete user by id
    .delete("/:id", userController_1.deleteUser)
    //update user by id
    .put("/:id", userController_1.updateUser);
exports.default = userRouter;
