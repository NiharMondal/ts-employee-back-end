import express from "express";


//import controller
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/userController";
const userRouter: express.Router = express.Router();

//create user
userRouter.post("/", createUser);

//get all users and single user by id
userRouter.get("/", getAllUsers).get("/:id", getUserById);

//delete and update user
userRouter.delete("/:id", deleteUser).put("/:id", updateUser);

export default userRouter;
