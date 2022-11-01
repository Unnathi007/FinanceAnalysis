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
addActivity(activity)
  .then(() => {
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log("hi " + err.message)
  })
sequelize.sync()
