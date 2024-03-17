import Message from "/home/thomas/Desktop/Morse Chat app/backend/models/message.model.js";
import User from "/home/thomas/Desktop/Morse Chat app/backend/models/user.models.js";
export const sendMessage = async(req,res)=>{
    try{
        console.log (req.body);
        const{message,rID}=req.body;
        const  id=req.params.id;
        JSON.stringify(id);
         
       
        const user = await User.findOne({UserID: rID });
        
        const   recieverID= user._id; // Return the ObjectId of the user
       const userr = await User.findOne({UserID: id });
       const sID=userr._id;
        
        const newMessage= new Message({
            rID,
            SenderuserID:id,
            SenderID:sID,
            recieverID,
            message

        })
        await newMessage.save();

        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("error in message controller",error.message)
        res.status(500).json({error:"internal server error"});

    }

   
};
export const openinbox = async(req,res)=>{
        try {
            const  id=req.params.id;
            
            const messgs=await Message.find({rID: id});
            console.log(messgs);
            res.status(201).json(messgs);
        } catch (error) {
            console.log("error in inbox controller",error.message)
            res.status(500).json({error:"internal server error"});
        }
}



