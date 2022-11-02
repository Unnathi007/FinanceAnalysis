const sequelize = require("./../utils/db_connection")
const credentials = require("./../models/credentials")

var cred_check = async (user) => {
  return credentials.findOne({
    where: {
      user_id: user,
    },
  })
}

/***************************** */

var cred_user_add = async (user) => {
  return credentials.create({
    user_id: user.user_id,
    PassHash: user.passHash,
  })
}

module.exports = { cred_check, cred_user_add }
