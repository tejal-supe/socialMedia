import { createUser, getUserByEmail, getUserByPhone } from "../db/user";
import express from "express";

export const signIn = async (req: express.Request, res: express.Response) => {
  try {
    const { name, username, email, password, phone } = req.body;
    //if email already exists
    // if phone already exsits
    if(!email || !name || !username || !phone || !password){
     return res.status(403).json({message:"Enter all the details"})
    }
    const dataByEmail = await getUserByEmail(email);
console.log(dataByEmail,'data by emial')
    if (dataByEmail) {
        return res.json({message:"Email already exists"})
    }
    const dataByPhone = await getUserByPhone(phone);
    if (dataByPhone) {
      return res.json({message:"Phone Number already exists"})
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
