import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './user.route.js';

dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb");
}).catch((err)=>{
    console.log(err);
});


const app = express();

app.listen(5000,()=>{
    console.log("Real Estate Server is running");
})

// app.get('/test',(req, res)=>{
// res.send('Hello World!');
// });


app.use('/api/user', userRoute)

