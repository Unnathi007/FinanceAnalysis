// import postgres from 'postgres'

// const sql = postgres({ /* options */ }) // will use psql environment variables

// export default sql
// const {Client}=require('pg').;
const Pool=require('pg').Pool;
const client=new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Unnathi07$",
    database:"postDB"
});
//client.connect();
client.query('select * from categories',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})
