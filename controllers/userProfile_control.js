const sequelize = require("../utils/db_connection")
const user_profile = require("../models/user_profile")
const db=require("../utils/associations")
var activity = async (user) => {
  return db.users_profiles.create({
    user_id:user.user_id,
    email:user.email,
    phone:user.phone,
    first_name:user.first_name,
    last_name:user.last_name,
    signup_timestamp :user.signup_timestamp
  })
}
const user={
    user_id:"abhigna",
    email:"abhi@gmail.com",
    phone:"1234567890",
    first_name:"abhigna",
    last_name:"vuppala",
    signup_timestamp :"2020-06-22 19:10:25-07"
}
activity(user)
  .then((res) => {
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log("hi " + err.message)
  })
sequelize.sync()
