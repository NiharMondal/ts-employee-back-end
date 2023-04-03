import { Request, Response } from "express";
import UserModel from "../model/userModel";

import { ReqQuery } from "../d.types";

//create user
export const createUser = async (req: Request, res: Response) => {
  const { fullName, email, gender, salary, age, role, status, country } =
    req.body;
  try {
    const createdUser = await UserModel.create({
      fullName,
      email,
      gender,
      age,
      salary,
      role,
      status,
      country,
    });

    createdUser.save((err) => {
      if (!err) {
        return res.status(201).json({
          success: "You have added user successfully",
        });
      }
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Please Provide every input field" });
  }
};

// get all user

export const getAllUsers = async (req: Request, res: Response) => {
  const { gender, role, status, country, sort, page, limit }: ReqQuery =
    req.query;

  const queryParams: any = {};

  if (gender) queryParams.gender = gender;
  if (role) queryParams.role = role;
  if (status) queryParams.status = status;
  if (country) queryParams.country = country;

  const filterParams: any = {};

  if (sort) {
    const sortBy = sort.split(",").join(" ");
    filterParams.sort = sortBy;
  }

  const convertedPageNum = parseInt(page!);
  const convetedLimit = parseInt(limit!);

  const skip = (convertedPageNum - 1) * convetedLimit;

  try {
    const allUser = await UserModel.find(queryParams)
      .skip(skip)
      .sort(filterParams.sort)
      .limit(convetedLimit);
    res.status(200).json(allUser);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

//get user by id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findById = await UserModel.findById({ _id: id });
    if (!findById) {
      return res.status(404).json({ success: false, message: "ID not found!" });
    }
    return res.status(200).json(findById);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

//delete user

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const checkUser = await UserModel.findOneAndDelete({
      _id: req.params.id,
      $and: [{ createdAt: { $exists: true } }],
    });

    if (checkUser) {
      return res.json({
        success: true,
        message: "User deleted successfully",
      });
    }
    return res
      .status(405)
      .json({ success: false, message: "You can not delete demo data" });
  } catch (error: any) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res
      .status(500)
      .json({ success: false, message: "Internal Server error" });
  }
};

//update user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, email, gender, salary, age, role, status, country } =
    req.body;

  //set update field
  try {
    const updateById = await UserModel.updateOne(
      { _id: id },
      {
        $set: {
          fullName,
          email,
          gender,
          salary,
          age,
          role,
          status,
          country,
        },
      }
    );

    if (updateById) {
      return res.status(200).json({
        success: true,
        message: "User has been updated successfully",
      });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: "Could not update user" });
  }
};
