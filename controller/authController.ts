import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AuthModel from "../model/authModel";

//login user types
interface LoginInfo {
  email: string;
  password: string;
}

//login user types extends with one extra property username
interface RegisterInfo extends LoginInfo {
  username: string;
}

//user registration
export const userResiter = async (req: Request, res: Response) => {
  const { username, email, password }: RegisterInfo = req.body;
  if (password.length < 5) {
    return res.status(400).json({ error: "Password must be 5 character" });
  }
  try {
    const oldUser = await AuthModel.findOne({ email: email });
    if (oldUser) {
      return res.json({ error: "User alreay exist" });
    }
    const createUser = await AuthModel.create({
      username,
      email,
      password: await bcrypt.hash(password, 12),
    });
    await createUser.save();
    return res.status(201).json({ success: "Registration successfull" });
  } catch (error) {
    return res.status(400).json({ error: "Please Provide every input field" });
  }
};

//user login
export const userLogin = async (req: Request, res: Response) => {
  const { email, password }: LoginInfo = req.body;
  if (!email) {
    return res.status(400).json({ error: "Please provide email address" });
  }
  if (!password) {
    return res.status(400).json({ error: "Please provide your password" });
  }
  try {
    const checkUser = await AuthModel.findOne({ email: email });
    if (!checkUser) {
      return res.json({ error: "User does not exist" });
    }

    const matchPass = await bcrypt.compare(password, checkUser.password);

    if (!matchPass) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    return res.status(200).json({ success: "Login successfull" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
