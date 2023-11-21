import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;

export const connectToDb = () => {
  mongoose.Promise = Promise;
  mongoose.connect(MONGO_URL);
  mongoose.connection.on("error", (error: Error) => console.log(error));
    mongoose.connection.on("connection", () => console.log("Connected"));
};