/*
All the realtions between tables has to be declared and defined in this file
*/
const Sequelize = require("sequelize")
const sequelize = require("../utils/db_connection")
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users_profiles = require("../models/user_profile")
db.credentials = require("../models/credentials")
db.user_activity = require("../models/user_activity")
db.sessions = require("../models/sessions")
//user_profile --- {one-one}-----credentials
// db.users_profiles.hasOne(db.credentials, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// })
// db.credentials.belongsTo(db.users_profiles, {
//   // foreignKey: {
//   //   name: "user_id",
//   //   allowNull: false,
//   // },
// })

//user_profile --- {many-one}-----sessions
db.users_profiles.hasMany(db.sessions, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
})
db.sessions.belongsTo(db.users_profiles, {
  foreignKey: {
    name: "user_id",
    allowNull: false
  },
})

//sessions --- {one-many}-----user_activity
db.sessions.hasOne(db.user_activity, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})
db.user_activity.belongsTo(db.sessions, {
  foreignKey: {
    name: "session_id",
    allowNull: false,
  },
})

module.exports = db
sequelize.sync()
