import { Router } from "express";
import { userRegister, userLogin } from "./../controller/authController";

const authRouter: Router = Router();

//register router
authRouter.post("/register", userRegister);

//login router
authRouter.post("/login", userLogin);

export default authRouter;
