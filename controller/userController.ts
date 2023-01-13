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

const errorHandler = (e) => {
  let errors = [];
  const allErrors = e.substring(e.indexOf(":") + 1).trim();
  const allErrorsInArrayFormat = allErrors.split(",").map((err) => err.trim());
  allErrorsInArrayFormat.forEach((error) => {
    const [key, value] = error.split(":").map((err) => err.trim());
    errors[key] = value;
  });
  return errors;
};

export default async function adddUser(req: Request, res: Response) {
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
    const createUser = await UserModel.create({
      firstName,
      lastName,
      userName,
      gender,
      contactInfo: {
        email,
        phone,
        website,
      },

      address: { city, country },

      role,
      profession,
    });

    await createUser.save();

    return res
      .status(201)
      .json({ success: "You have added user successfully!" });
  } catch (error) {
    return res.status(400).json({ error: "Please Provide every input field" });
  }
}
