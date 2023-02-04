import { Request, Response } from "express";
import UserModel from "../model/userModel";
import { TUser } from "../modelTypes/types";

//create user
export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, userName, gender, age, email, role }:TUser = req.body;
  try {
    const createdUser = await UserModel.create({
      firstName,
      lastName,
      userName,
      email,
      gender,
      age,
      role,
    });

    createdUser.save((err) => {
      if (!err) {
        return res.status(201).json({
          success: "You have added user successfully",
        });
      }
    });
  } catch (error) {
    return res.status(400).json({ error: "Please Provide every input field" });
  }
};

// get all user

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.find();
    if (allUsers) {
      return res.status(200).json(allUsers);
    }
    return res.status(400).json({ error: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//get user by id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findById = await UserModel.findById({ _id: id });
    if (!findById) {
      return res.status(404).json({ error: "Id not found!" });
    }
    return res.status(200).json(findById);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//delete user

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteUser = await UserModel.deleteOne({ _id: id });
    if (deleteUser) {
      return res
        .status(200)
        .json({ success: "User has been deleted successfully" });
    }
  } catch (error) {
    return res.status(404).json({ error: "User is not found!" });
  }
};

//update user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, userName, email, gender, age, role }: TUser =
    req.body;

  //set update field
  try {
    const updateById = await UserModel.updateOne(
      { _id: id },
      {
        $set: {
          firstName,
          lastName,
          email,
          userName,
          gender,
          age,
          role,
        },
      }
    );

    if (updateById) {
      return res.status(200).json({
        success: "User has been updated successfully",
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Could not update user" });
  }
};
