import mongoose from "mongoose";
let isConnected=false;
export const connectDB=async()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log("Mongoose is already Connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected=true;
        console.log("MongoDb Connected");
    } catch (error) {
        console.log(error);
    }
}