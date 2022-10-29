const express=require('express');
const app=express();
const Sequelize = require('sequelize');
const Port=process.env.PORT || 9090;
process.env.PGOPTIONS="-c search_path=fa";
// const pg=require('pg');//.Pool;
const Pool=require('pg').Pool;
const client=new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Unnathi07$",
    database:"FinanceAnalysis",
    currentSchema:'fa'
});

//generate session id
var crypto = require('crypto');

var generate_key = function() {
    // 16 bytes is likely to be more than enough,
    // but you may tweak it to your needs
    return crypto.randomBytes(16).toString('base64');
};

//////////

//connect db
var conString = "postgres://postgres:Unnathi07$@localhost:5432/FinanceAnalysis?search_path=fa";

// var client = new pg.Client(conString);
client.connect();

app.use(express.json({extended:false}));
client.query('select * from users_info',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})

client.query("SET search_path TO fa;")
app.get('/',(req,res)=>{
    res.send('Hello Unnathi');
})
app.get('/values',(req,res)=>{
    let sol;
    // client.query("SET search_path TO 'fa';")
    console.log(client.database);
    client.query(`select * from user_info where user_id=${req.params.userId}`,(err,result)=>{
        if(!err){
            console.log("hi "+result.rows);
        }else{
            console.log("hi "+err.message);
        }
        sol=result;
        client.end;
    })
    // result=
    console.log("hi " ,sol);
    res.send(sol);
})
app.listen(Port,()=>{
    console.log("Server is running on Port : ",Port);
})