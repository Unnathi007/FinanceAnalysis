const sequelize = require("../utils/db_connection")
const { credentials } = require("./../models/credentials")

var login_check = async (user) => {
  return credentials.findAll({
    where: {
      user_id: `${user}`,
    },
  })
}

var check = login_check("row1")

check.then((res) => {
  console.log(JSON.stringify(res))
})
sequelize.sync()
