import mongoose from "mongoose";

const messageSchema =new mongoose.Schema({

    rID:{
        type:String,
        required:true
    },
    SenderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    SenderuserID:{
        type:String,
        required:true
    },
    recieverID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const Message=mongoose.model("Message",messageSchema);

export default Message;