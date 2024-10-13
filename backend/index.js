const express=require('express');
const app=express();
const UserRoute=require('./Routes/UserRoute');
const connectDB=require('./connectDB');
require('dotenv').config();
const cors=require('cors');
connectDB();
app.use(cors());
app.use(express.json());


app.use('/user',UserRoute);


app.listen(5000,()=>{
    console.log("server is starting ");
})