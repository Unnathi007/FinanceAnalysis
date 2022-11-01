//const cred_control=require("../controllers/cred_control");
const {createUser} =require( "../controllers/userProfile_control");
const {credUserAdd,cred_check} =require( "../controllers/cred_control");
const express=require('express');
const sequelize = require("../utils/db_connection");
const app=express();
const Port=process.env.PORT || 9090;
app.get('/',(req,res)=>{
    res.send("Hi");

})
app.use(express.json({extended:false}));
app.post('/registerUser',(req,res,next)=>{
    console.log(req.body);
    const user={
        user_id:req.body.user_id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        signup_timestamp:req.headers["Date"]
    }
    createUser(user).then((result)=>{
        console.log("Registered user : ",user)
        sequelize.sync();
    }).catch((err)=>{
        console.log("register user error : ",err.message)
        res.sendStatus(502);//.send("error : ",err.message)
    })
    const cred={
        user_id:req.body.user_id,
        PassHash:req.body.PassHash
    }
    credUserAdd(cred).then((result)=>{
        console.log("user credentials : ",cred);
        sequelize.sync();
        //res.send("User added successfully")
    }).catch((err)=>{
        console.log("cred error : ",err.message)
        res.sendStatus(502);//.sendsend("error : ",err.message)
    })
    res.status(200).send("User added successfully")
})
app.post('/login',(req,res)=>{
   let password;
   let credentials=req.body.user_id;
   cred_check(credentials).then((result)=>{
    console.log("Login Successful : ",result)
    password=result.PassHash;
   }).catch((err)=>{
    console.log("Login errorr : ",err.message)
   })
   if(password==req.passHash){
    res.status(200).send("Login Successful");
    // res.status(200).send('/home');
    // res.cookie(process.env.COOKIE_SESSIONID, sessionId, {
    //     expires: new Date(Date.now() + 60000 * 30),
    //     secure: req.protocol === 'https',
    //     path: '/',
    //   });
   }else{
    res.sendStatus(502);
   }
})
app.listen(Port,()=>{
    console.log("Server is running on Port : ",Port);
})