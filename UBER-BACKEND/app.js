
const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors')
const connectToDb=require('./db/db')
connectToDb();
dotenv.config();
app.use(cors());


app.get('/',(req,res)=>{
    res.send("HEllo world");
});


module.exports=app;