import { Router } from "express";

//import controller
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/userController";
const userRouter: Router = Router();

//create and get all users
userRouter.post("/", createUser).get("/", getAllUsers);

userRouter
  //get single user by id
  .get("/:id", getUserById)
  //delete user by id
  .delete("/:id", deleteUser)
  //update user by id
  .put("/:id", updateUser);

export default userRouter;
