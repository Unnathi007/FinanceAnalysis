const sequelize = require("../utils/db_connection")
const sessions = require("./../models/sessions")

const session_add = async (session) => {
  return sessions.create({
    user_id: session.user_id,
    session_id: session.session_id,
    session_timestamp: session.session_timestamp,
  })
}

//console.log(sessions.rawAttributes)
// sequelize.sync()
module.exports = { session_add }
