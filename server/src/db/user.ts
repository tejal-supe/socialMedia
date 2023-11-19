import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});
export const userModel = mongoose.model("User", userSchema);

export const getAllUsers = () => userModel.find();

export const getUserByEmail = (email: string) => userModel.find({ email });

export const getUserByPhone = (phone: number) => userModel.findOne({ phone });

export const createUser = (values: Record<string, any>) =>
  new userModel(values).save().then((user) => user.toObject());