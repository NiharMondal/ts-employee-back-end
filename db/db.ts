import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await await (
      await mongoose.connect(process.env.MONGO_URI)
    ).set({ strictQuery: true });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
