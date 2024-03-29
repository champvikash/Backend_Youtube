import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try{
      const connectionInstant = await mongoose.connect(`${process
        .env.MONGODB_URI}/${DB_NAME}`)

        console.log(`connectionInstant${connectionInstant}`)
        console.log(`\n MongoDb Connected !! DB HOST: 
        ${connectionInstant.connect.host}`)
    } catch(error){
        console.log("MONGODB connection error " , error);
        process.exit(1)
    }
}

export default connectDB;