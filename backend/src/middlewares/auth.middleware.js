import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/model.user.js";

dotenv.config();

export const isAuthenticated = async (req,res,next)=>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"Unauthorized request"});
        }

        const token = authHeader.split(" ")[1]?.replace(/^"|"$/g,"");

        if(!token){
            return res.status(401).json({message:"Token is required"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        if(!user){
            return res.status(401).json({message:"User not found"});
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Authentication error:",error.message);
        return res.status(401).json({message:"Invalid or expired token"});
    }
};
