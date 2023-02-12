import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AuthModel from "../model/authModel";
import jwt from "jsonwebtoken";
import { LoginRequest, RegisterRequest } from "../modelTypes/types";

//user registration
export const userRegister = async (req: Request, res: Response) => {
  const { username, email, password }: RegisterRequest = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Please provide every input field" });
  }
  if (password.length < 5) {
    return res.status(400).json({ error: "Password must be 5 character" });
  }

  try {
    const oldUser = await AuthModel.findOne({ email: email });
    if (oldUser) {
      return res.status(400).json({ error: "User alreay exist" });
    }
    const createdUser = await AuthModel.create({
      username,
      email,
      password: await bcrypt.hash(password, 12),
    });
    createdUser.save((err) => {
      if (!err) {
        const token = jwt.sign(
          { _id: createdUser._id, email: createdUser.email },
          process.env.TOKEN_SECRET!,
          {
            expiresIn: "5m",
          }
        );
        return res
          .cookie("auth_token", token)
          .status(200)
          .json({
            user: {
              _id: createdUser._id,
              email: createdUser.email,
              username: createdUser.username,
            },
            token: token,
          });
      }
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//user login
export const userLogin = async (req: Request, res: Response) => {
  const { email, password }: LoginRequest = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const checkUser = await AuthModel.findOne({ email: email });

    if (!checkUser) {
      return res.status(401).json({ error: "User does not exist" });
    }

    const matchPass = await bcrypt.compare(password, checkUser.password);
    if (!matchPass) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { _id: checkUser._id, email: checkUser.email },
      process.env.TOKEN_SECRET!,
      {
        expiresIn: "5m",
      }
    );

    return res
      .cookie("auth_token", token, { httpOnly: true })
      .status(200)
      .json({
        user: { _id: checkUser._id, email: checkUser.email,username: checkUser.username },
        token: token,
      });
  } catch (error) {
    return res.status(500).json({ error:error});
  }
  
};
