// const sequelize = require("../utils/db_connection")
const user_profile = require("./../models/user_profile")
// const db=require("../utils/associations")
const user_create = async (user) => {
  return user_profile.create({
    user_id: user.user_id,
    email: user.email,
    phone: user.phone,
    first_name: user.first_name,
    last_name: user.last_name,
    signup_timestamp: user.signup_timestamp,
  })
}

// const user={
//     user_id:"abhigna",
//     email:"abhi@gmail.com",
//     phone:"1234567890",
//     first_name:"abhigna",
//     last_name:"vuppala",
//     signup_timestamp :"2020-06-22 19:10:25-07"
// }
// const user1={
//   user_id: 'desa41273',
//   email: 'desani12374@gmail.com',
//   phone: '1837787890',
//   first_name: 'teja',
//   last_name: 'desani',
//   signup_timestamp :"2020-06-22 19:10:25-07"
// }
// createUser(user)
//   .then((res) => {
//     console.log(JSON.stringify(res))
//   })
//   .catch((err) => {
//     console.log("hi " + err.message)
//   })
// sequelize.sync()
module.exports = { user_create }
