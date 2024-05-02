import mongoose from "mongoose";

export async function dbConncect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB Connected");
    return conn;
  } catch (error) {
    console.log(error);
  }
}
