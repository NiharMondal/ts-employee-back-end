import { Request, Response } from "express";
import UserModel from "../model/userModel";


type UserProps = {
  firstName: string;
  lastName: string;
  gender: string | null;
  userName: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  country: string;
  role: string | null;
  profession: string | null;
};


//create user
export const createUser = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    userName,
    gender,
    email,
    phone,
    website,
    city,
    country,
    role,
    profession,
  }: UserProps = req.body;
  try {
    const createdUser = await UserModel.create({
      firstName,
      lastName,
      userName,
      gender,
      contactInfo: {
        email,
        phone,
        website,
      },
      address: {
        city,
        country,
      },
      role,
      profession,
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
    const allUsers = await UserModel.find({});
    if (allUsers) {
      return res.status(200).json({
        success: "Please Wait! We are geting your information",
        allUsers,
      });
    }
    return res.status(400).json({ error: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//get user by id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } =  req.params;
    const findById = await UserModel.findById({ _id: id });
    if (!findById) {
      return res.status(404).json({ error: "Id not found!" });
    }
    return res
      .status(200)
      .json({ success: "Here is your information", findById });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//delete user

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } =  req.params;
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
  const {
    firstName,
    lastName,
    userName,
    gender,
    email,
    phone,
    website,
    city,
    country,
    role,
    profession,
  } = req.body;

  //set update field
  try {
    const updateById = await UserModel.updateOne(
      { _id: id },
      {
        $set: {
          firstName,
          lastName,
          userName,
          gender,
          contactInfo: {
            email,
            phone,
            website,
          },
          address: {
            city,
            country,
          },
          role,
          profession,
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
