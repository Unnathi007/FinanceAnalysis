const express=require('express');
const app=express();
const Port=process.env.PORT || 9090;
const promise = require('bluebird');
//const initOptions = {/* initialization options */};
// const schema='fa';
const initOptions = {
    promiseLib: promise, // overriding the default (ES6 Promise);
    // connect: (client, dc, isFresh) => {
    //     if(isFresh) {
    //         client.query(`SET search_path TO ${schema}`);
    //     }
    // }
    schema:['public','fa']
};

const pgp = require('pg-promise')(initOptions);
// const db = pgp(connection);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'FinanceAnalysis',
    user: 'postgres',
    password: 'Unnathi07$',
    max: 30
    // schema:'fa'
    
};
// "types" - in case you want to set custom type parsers on the pool level
//const pgp = require('pg-promise')();
const db = pgp(cn);
//db.connect();
app.get('/',async (req,res)=>{
    var sol;
    await db.any('SELECT * FROM users_info')
    .then(function(data) {
        // success;
        console.log(typeof(data));
        sol=data;
    })
    .catch(function(error) {
       console.log("error"); // error;
       
    });
//     console.log(sol.rows);
//     return res
//   .status(200)
//   .send(sol.rows);
//     res.send(sol);
//     res.send('Hello Unnathi');
res.send(sol);
})



app.get('/values',async (req,res)=>{
    var sol;
    await db.any('SELECT * FROM users_info')
    .then(function(data) {
        // success;
        console.log(data);
        sol=data;
    })
    .catch(function(error) {
       console.log("error"); // error;
    });
    console.log(sol);
    res.send(sol);
})


app.get('/password',async (req,res)=>{
    var sol;
    await db.any('SELECT * FROM credentials')
    .then(function(data) {
        // success;
        console.log(data);
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
async function testConnection() {
    const c = await db.connect(); // try to connect
    c.done(); // success, release connection
    return c.client.serverVersion; // return server version
}
console.log(testConnection());