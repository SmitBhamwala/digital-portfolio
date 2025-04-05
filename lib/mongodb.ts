import mongoose from "mongoose";

const {MONGODB_URI} = process.env;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

export async function connectToDatabase() {
  try {
    const client = await mongoose.connect(MONGODB_URI as string);
    if (client.connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}