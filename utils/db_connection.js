const Sequelize = require("sequelize")
const { database, user, password, host, db_port } = require("./config")
const sequelize = new Sequelize(database, user, password, {
  host,
  db_port,
  dialect: "postgres",
  logging: false,
})

module.exports = sequelize
