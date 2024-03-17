import User from "/home/thomas/Desktop/Morse Chat app/backend/models/user.models.js";

export const login=async(req,res)=> {
    try{
       const {fullName,UserID}=req.body;
        const newuser=new User({
            fullName,
            UserID
        })
        console.log(newuser);
        await newuser.save();
        res.status(201).json(newuser);
        
    
    } catch(error)
    {
        console.log("Error in signup");
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const signup=async(req,res)=> {
    try{
        const user = await User.findOne({UserID: rID });

        
    
    } catch(error)
    {
        console.log("Error in signup");
        res.status(500).json({error:"Internal Server Error"});
    }
};
