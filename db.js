import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
   return mongoose.connect(process.env.MONGO_URI)
  .then(conn => { // We can also use async await here
    console.log("MongoDB Connected");
  })
  .catch(error => {
    console.log(`Error while connecting to MongoDB: ${error.message}`);
  });
};

export default connectDB;