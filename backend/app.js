import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(express.json({limit:"25mb"}));
app.use(express.urlencoded({extended:true,limit:"25mb"}));
app.use(cors());

dotenv.config();

import userRoute from "../backend/src/routes/user.route.js"

app.use("/api/user",userRoute);

export default app;

