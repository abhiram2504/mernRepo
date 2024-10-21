import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// This is an async function that connects to the MongoDB database using the mongoose.connect() method.
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); //process.exit(1) will exit the process with an error code of 1, which indicates that an error occurred.
        // process.exit(0) will exit the process without an error code.
    }
}
