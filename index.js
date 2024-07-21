import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './Routes/user.js';
import videoRoutes from './Routes/video.js';
import bodyParser from "body-parser";
import path from 'path'
dotenv.config()
const app=express();
app.use(cors())
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use('/uploads',express.static(path.join('uploads')))



app.get('/', (req,res)=>{
    res.send("Hello");
});
app.use(bodyParser.json())
app.use('/user', userRoutes);
app.use('/video', videoRoutes); 

const PORT=5800;

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
})
const DB_URL= "mongodb+srv://siddharth2727:YouTubeClone@userdataset.d8doqg7.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB database connected");
}).catch((error)=>{
    console.log("error");
})