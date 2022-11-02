const {addSession} =require( "../controllers/session_control");
const {addActivity} =require( "../controllers/userActivity_control");
const express=require('express');
const sequelize = require("../utils/db_connection");
const app=express();
const Port=process.env.PORT || 9090;
app.get('/',(req,res)=>{
    res.send("Hi");

})
app.use(express.json({extended:false}));
var cookieParser = require('cookie-parser');
var session = require('express-session')
app.use(cookieParser());
// app.use(session({
//     genid: function(req) {
//         return genuuid() // use UUIDs for session IDs
//       },
//     secret: '34SDgsdgspxxxxxxxdfsG', // just a long random string
//     resave: false,
//     saveUninitialized: false,
//     cookie:{maxAge:1000 * 60 * 60 * 24}
// }));
app.post('/addExpense',(req,res)=>{
    // let session_id=req.sessionID;
    // let user_id=req.session.cookie.user_id;
    let sessionId='thgyhlolmyhnmvfd';
    const activity={
          session_id:sessionId,
          TxnType:req.body.TxnType,
          Category:req.body.Category,
          Amount:req.body.Amount,
    }
    const sessionDetails={
        session_id:sessionId,
        user_id:req.body.user_id,
        session_timestamp:req.headers["Date"]
    }
    addSession(sessionDetails).then((result)=>{
        console.log("session added : ",result)
        sequelize.sync();
        addActivity(activity).then((result)=>{
            console.log("Activity added : ",result)
            sequelize.sync();
            
        }).catch((err)=>{
            console.log("Activity can't be added : ",err.message)
            res.sendStatus(502);//.send("error : ",err.message)
        })
    }).catch((err)=>{
        console.log("session can't be added : ",err.message)
        res.sendStatus(502);//.send("error : ",err.message)
    })
    res.sendStatus(200).send("Activity Recorded");

    
})
app.listen(Port,()=>{
    console.log("Server is running on Port : ",Port);
})