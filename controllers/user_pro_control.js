const sequelize = require("../utils/db_connection")
const user_profile = require("./../models/user_profile")

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

const user_update = async (user, user_data) => {
  return user_profile.update(user_data, { where: { user_id: user } })
}
module.exports = { user_create, user_update }
// sequelize.sync()
