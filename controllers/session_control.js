const sequelize = require("../utils/db_connection")
const sessions = require("./../models/sessions")

const add_session = async (session) => {
  return sessions.create({
    user_id: session.user_id,
    session_id: session.session_id,
    session_timestamp: session.session_timestamp,
  })
}

console.log(db.sessions.rawAttributes)
sequelize.sync()
module.exports = { add_session }
