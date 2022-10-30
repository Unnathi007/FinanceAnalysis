const sequelize = require("../utils/db_connection")
const credentials = require("./../models/credentials")
const db = require("../utils/associations")

var login_check = async (user) => {
  console.log(user)
  return db.credentials.findOne({
    where: {
      user_id: user,
    },
  })
}

var check = login_check("row1")

check
  .then((res) => {
    console.log("success output")
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log(err.message)
  })
// sequelize.sync()
