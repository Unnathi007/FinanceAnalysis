const express=require('express');
const app=express();
const Port=process.env.PORT || 9090;
const initOptions = {/* initialization options */};

// const db = pgp(connection);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'FinanceAnalysis',
    user: 'postgres',
    password: 'Unnathi07$',
    max: 30, // use up to 30 connections
    schema:'fa'
    // "types" - in case you want to set custom type parsers on the pool level
};
const pgp = require('pg-promise')();
const db = pgp(cn);
db.connect();
app.get('/',(req,res)=>{
    res.send('Hello Unnathi');
})
app.get('/values',(req,res)=>{
    var sol;
    db.any('SELECT * FROM user_info ')
    .then(function(data) {
        // success;
        sol=data;
    })
    .catch(function(error) {
       console.log("error"); // error;
    });
    console.log(sol);
    res.send(sol);
})
app.listen(Port,()=>{
    console.log("Server is running on Port : ",Port);
})