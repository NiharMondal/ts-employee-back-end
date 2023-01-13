import express from "express";
import addUserController from "../controller/userController";
const userRouter: express.Router = express.Router();

userRouter.get('/', (req,res)=>{
   res.send("router is working")
}).post("/add-user", addUserController);

export default userRouter;
