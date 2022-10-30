const sequelize = require("../utils/db_connection")
// const user_profile = require("../models/user_profile")
const db=require("../utils/associations")
var addSession = async (session) => {
  return db.sessions.create({
    user_id:session.user_id,
    session_id:session.session_id,
    session_timestamp:session.session_timestamp
  })
}
const session={
    user_id:"abhigna",
    session_id:"asdfghjk9876tfvbh",
    session_timestamp:"2022-10-25 19:10:25-07"
}
addSession(session)
  .then((res) => {
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log("hi " + err.message)
  })
console.log(db.sessions.rawAttributes);
sequelize.sync()
