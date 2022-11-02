const data = require('./MOCK_DATA.json');

const express = require('express')

const app = express()

const port = 9090

app.get('/',(req,res)=>{res.send(data)})

app.listen(port,()=>console.log("server running on port %s",port))

console.log(data);