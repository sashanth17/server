import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("db connected sucessfully");
  } catch (err) {
    throw err;
  }
};

export default db;
