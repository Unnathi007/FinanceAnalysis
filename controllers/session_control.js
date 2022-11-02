const sequelize = require("../utils/db_connection")
const sessions = require("../models/sessions")
// const db=require("../utils/associations")
var addSession = async (session) => {
  return sessions.create({
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
// addSession(session)
//   .then((res) => {
//     console.log(JSON.stringify(res))
//   })
//   .catch((err) => {
//     console.log("hi " + err.message)
//   })
var getSessions = async (user_id) => {
    return sessions.findAll({
      where: {
        user_id:user_id
      },
      attributes: ["session_id"]
    })
}
// let user_id="abhigna";
// getSessions(user_id)
//     .then((res) => {
//       console.log(JSON.stringify(res))
//     })
//     .catch((err) => {
//       console.log("hi " + err.message)
// })

// console.log(db.sessions.rawAttributes);
sequelize.sync()
module.exports = {addSession,getSessions};