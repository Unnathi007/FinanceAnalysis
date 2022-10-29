const express=require('express');
const app=express();
const Sequelize = require('sequelize');
const Port=process.env.PORT || 9090;
const Pool=require('pg').Pool;
const client=new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Unnathi07$",
    database:"postDB"
});
//client.connect();
app.use(express.json({extended:false}));
client.query('select * from categories',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})
app.get('/',(req,res)=>{
    res.send('Hello Unnathi');
})
app.get('/values',(req,res)=>{
    let sol;
    client.query('select * from user_activity where user_id='+req.params.userId,(err,result)=>{
        if(!err){
            console.log(result.rows);
        }else{
            console.log(err.message);
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