import express from "express";
import dotenv from "dotenv";
import authRoutes from "/home/thomas/Desktop/Morse Chat app/backend/routes/auth.routes.js"
import connectToMongoDB from "/home/thomas/Desktop/Morse Chat app/backend/db/connecttomongodb.js";
import messageRoutes from "/home/thomas/Desktop/Morse Chat app/backend/routes/message.routes.js";
import cors from "cors";
const app=express();
const PORT = 3000;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/app/auth",authRoutes);
app.use("/app/messages",messageRoutes);
app.use("/app/inbox",messageRoutes);
app.get("/app",(req,res)=>{
    res.send("hello  world");
});


app.listen(PORT,()=> {
connectToMongoDB();
console.log(`server running ${PORT}`);

})