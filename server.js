import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(()=>
// {
//     app.listen(8080,()=>{
//     console.log("Server Started");
// });
// });

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.z4jiwo3.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`).then(()=>
{
    app.listen(8080,()=>{
    console.log("Server Started");
});
});

app.use("/api/users",userRouter);
app.use("/api/products", productRouter);

