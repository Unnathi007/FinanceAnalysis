const {createUser} =require( "../controllers/userActivity_control");
const express=require('express');
const sequelize = require("../utils/db_connection");
const app=express();
const Port=process.env.PORT || 9090;
app.get('/',(req,res)=>{
    res.send("Hi");

})
app.use(express.json({extended:false}));