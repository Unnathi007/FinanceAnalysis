// const {db}=require('../utils/associations');

const sequelize = require("../utils/db_connection")
const user_activity = require("../models/user_activity")

var addActivity = async (activity) => {
  return user_activity.create({
    index:activity.id,
    session_id:activity.session_id,
    TxnType:activity.TxnType,
    Category:activity.Category,
    Amount:activity.Amount,
    session_timestamp:activity.session_timestamp
  })
}
const activity={
  id:1,
  session_id:"sdfcv765dgkj",
    TxnType:"Shopping",
    Category:"Expense",
    Amount:1200,
    session_timestamp:'2022-10-25 19:10:25-07'
}
// addActivity(activity)
//   .then((res) => {
//     console.log(JSON.stringify(res))
//   })
//   .catch((err) => {
//     console.log("hi " + err.message)
//   })
var findActivities = async (sessionIds) => {
    return user_activity.findAll({
      where: {
        session_id:[...sessionIds]
      },
    });
}
// let sessionIds=["5elZkUdQpf8i2YKQjyaDBXE9mi1XFsoe","BXlQSTU4GvYNTklVrJwvcnaD5Ozc4cgu","thgyhlolmyhnmvfd"];
// findActivities(sessionIds)
//   .then((res) => {
//     console.log(JSON.stringify(res))
//   })
//   .catch((err) => {
//     console.log("hi " + err.message)
// })


//////////////Update Activity
let id=1;
let record;
const getRecord=(id)=>{
  return user_activity.findOne({
    where:{
      index:id
    }
  })
}
const updatedDetails={
  Amount:500,
  TxnType:"Travel"
}


var updateRecord = async (updatedDetails,record) => {
    record.set({
      Amount:updatedDetails.Amount,
      TxnType:updatedDetails.TxnType
    })
    await record.save();
    return record;
}
// getRecord(id).then((result)=>{
//   console.log(" Record : ",result);
//   record=result;
//   updateRecord(updatedDetails,record)
//   .then((res) => {
//     console.log("find Activity : ",JSON.stringify(res))
    
//   })
//   .catch((err) => {
//     console.log("findActivity error : " + err.message)
//   })
// }).catch((err)=>{
//   console.log("Error : ",err)
// })


/////delete record
var deleteRecord = async (record) => {
  await record.destroy();
  return record;
}
// id=7;
// getRecord(id).then((result)=>{
//   console.log(" Record : ",result);
//   record=result;
//   deleteRecord(record)
//   .then((res) => {
//     console.log("find Activity : ",JSON.stringify(res))
    
//   })
//   .catch((err) => {
//     console.log("findActivity error : " + err.message)
//   })
// }).catch((err)=>{
//   console.log("Error : ",err)
// })

sequelize.sync()
module.exports = {addActivity,findActivities,getRecord,updateRecord,deleteRecord};
