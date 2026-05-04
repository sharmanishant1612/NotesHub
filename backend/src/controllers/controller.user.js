import User from "../models/model.user.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";

dotenv.config();

export const indexRoute =  (req,res)=>{
    res.send("This is indexRoute");
};

export const signup = async (req,res)=>{
    try {
        const {name,email,phone,password,gender} = req.body;

        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(password);
        console.log(gender);
    
        if(!name||!email||!phone||!password||!gender){
            return res.status(400).json({message:"All details are required:"});
        }
    
        const existingUser =await User.findOne({$or:[{email},{phone}]});
    
        if(existingUser){
            return res.status(409).json({message:"User already exist with this email or phone:"});
        }
    
        const newUser = await User.create({
            name,
            email,
            phone,
            password,
            gender,
        });

        console.log(newUser);
        return res.status(200).json({message:"User created succefully:"});
        
    } catch (error) {
        console.log("new usr creating error",error.message);
        return res.status(500).json({message:error.message});
    }
};


export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
    
        if(!email||!password){
            return res.status(202).json({message:"All details are required:"});
        }
    
        const existUser = await User.findOne({email});
    
        if(!existUser){
            return res.status(404).json({message:"User does not exist with this email:"});
        }

        const iscorrectPasswrod = await existUser.comparePassword(password);
    
        if(!iscorrectPasswrod){
            return res.status(400).json({message:"Password is incorrect:"});
        }

        console.log(existUser);
        // console.log(process.env.JWT_SECRET);
        // console.log(process.env.jWT_EXPIRE);
        const token = jwt.sign(
            {id:existUser._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRE}
        );
    
        return res.status(200).json({
            message:"User logged in successfully",
            token,
            user:existUser
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:error.message});
    }

}

export const deleteAccount = async (req,res)=>{
    try {
        const userId = req.user?._id;

        if(!userId){
            return res.status(401).json({message:"Unauthorized request"});
        }

        const notesCollection = await mongoose.connection.db
            .listCollections({name:"notes"})
            .toArray();

        if(notesCollection.length){
            await mongoose.connection.collection("notes").deleteMany({
                $or:[
                    {user:userId},
                    {userId:userId},
                    {createdBy:userId},
                    {owner:userId},
                    {author:userId},
                    {user:userId.toString()},
                    {userId:userId.toString()},
                    {createdBy:userId.toString()},
                    {owner:userId.toString()},
                    {author:userId.toString()}
                ]
            });
        }

        await User.findByIdAndDelete(userId);

        return res.status(200).json({message:"Account deleted successfully"});
    } catch (error) {
        console.log("Account delete error:",error.message);
        return res.status(500).json({message:error.message});
    }
};

export const uploadProfileImage = async (req,res)=>{
    try {
        const userId = req.user?._id;
        const {profileImage} = req.body;

        if(!userId){
            return res.status(401).json({message:"Unauthorized request"});
        }

        if(!profileImage){
            return res.status(400).json({message:"Profile image is required"});
        }

        if(typeof profileImage !== "string" || !profileImage.startsWith("data:image/")){
            return res.status(400).json({message:"Invalid profile image format"});
        }

        const uploadResult = await cloudinary.uploader.upload(profileImage,{
            folder:"noteshub/profile-images",
            resource_type:"image"
        });

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {profileImage:uploadResult.secure_url},
            {new:true}
        ).select("-password");

        return res.status(200).json({
            message:"Profile image updated successfully",
            user:updatedUser
        });
    } catch (error) {
        console.log("Profile image upload error:",error.message);
        return res.status(500).json({message:error.message});
    }
};



// {
//      "name": "Sunny Verma",
//     "phone": "9027259417",
//     "gender": "Male",
//    "email": "sunnyvermaverma2005@gmail.com",
//    "password": "sunny@123"
   
// }
