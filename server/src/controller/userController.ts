import { createUser } from "db/user";
import express from "express";

export const signIn = async (req: express.Request, res: express.Response) => {
  try {
    const { name, username, email, password, phone } = req.body;
    //if email already exists
    // if phone already exsits

    if (email) {
    }
    if (phone) {
    }
    const userDetails = {
      name,
      username,
      email,
      password,
      phone,
    };
    const user = await createUser(userDetails);
    res.status(200).json({ user, message: "User created sucessfully!!" });
  } catch (error) {
    console.log(error);
  }
};
