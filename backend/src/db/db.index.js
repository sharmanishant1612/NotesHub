import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb Connection successfull:");

    } catch (error) {
        console.log("mongodb connection error",error);
    }
}

export default connectDB;