import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path:"./env"
})
connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running in ${process.env.PORT}`);
    
})
}).catch((err)=>console.log("mongodb connection fail :",err))

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("ERROR :",error)
//         throw error
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is running on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.log("EERROR", error);
//     throw error;
//   }
// })();
