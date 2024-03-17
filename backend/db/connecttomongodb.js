import mongoose from 'mongoose';
const connectToMongoDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb");
    }
    catch(error){
        console.log("Error connecting to MOngoDB",error.message)
    }
};

export default connectToMongoDB;