import express from "express";
import { userResiter, userLogin } from './../controller/authController';


const authRouter: express.Router = express.Router();

//register router
authRouter.post('/register',userResiter);

//login router
authRouter.post("/login", userLogin);

export default authRouter;