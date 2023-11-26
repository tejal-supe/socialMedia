import { checkPassword } from "../helpers/index";
import { createUser, getUserByEmail, getUserByPhone, getUserByUsername } from "../db/user";
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
    console.log(dataByPhone,'by phone')
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


export const loginIn = async (req: express.Request, res: express.Response) => {
  try {
    const { password, emailOrUsername } = req.body;
    // no data
    if (!password || !emailOrUsername) {
      return res.json({message:"Enter all the details"})
    }
    const email = emailOrUsername
    const username = emailOrUsername
    const userByEmail = (await getUserByEmail(email));
    const userByUsername = await getUserByUsername(username);

    //email present
    if (userByEmail) {
      const matched = await checkPassword(password, userByEmail)
      if (matched) {
        res.json({message:"Logged in success!"})
      }
      else {
        res.json({message:"Password does not match"})
      }
      
    }

    //username present
    if (userByUsername) {
      
    }

    if (!userByEmail ) {
      return res.json({ message: "User does not exists!" });
      
    }

    //email - no username -yes and vice versa

    // if no email and no username 




  } catch (error) {
    console.log(error);
    return res.sendStatus(403);
  }
}