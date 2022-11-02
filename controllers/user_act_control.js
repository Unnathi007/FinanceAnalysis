// const {db}=require('../utils/associations');
// const sequelize = require("../utils/db_connection")

const user_activity = require("../models/user_activity")

const activity_add = async (activity) => {
  return user_activity.create({
    index: activity.id,
    session_id: activity.session_id,
    TxnType: activity.TxnType,
    Category: activity.Category,
    Amount: activity.Amount,
    session_timestamp: activity.session_timestamp,
  })
}

module.exports = { activity_add }
