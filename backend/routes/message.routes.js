import express from "express";
import {sendMessage} from "/home/thomas/Desktop/Morse Chat app/backend/controller/message.controller.js";
import { openinbox } from "/home/thomas/Desktop/Morse Chat app/backend/controller/message.controller.js";

const router =express.Router();

router.post("/send/:id",sendMessage);
router.get("/:id",openinbox);

export default router;``