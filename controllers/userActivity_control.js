// const {db}=require('../utils/associations');

const sequelize = require("../utils/db_connection")
const { sessions } = require("../models/sessions")

var activity = async (user) => {
  return sessions.findAll({
    where: {
      user_id: `${user}`,
    },
  })
}
activity("sdfgh")
  .then(() => {
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log("hi " + err.message)
  })
// sequelize.sync()
