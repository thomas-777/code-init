import express from "express";
import { login } from "/home/thomas/Desktop/Morse Chat app/backend/controller/auth.controller.js";

const router=express.Router();

router.post("/login",login);    
export default router;