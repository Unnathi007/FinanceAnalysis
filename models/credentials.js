const Sequelize = require("sequelize")
sequelize = require("../utils/db_connection")
const {Schema}=require("../utils/config");
const credentials = sequelize.define(
  "credentials",
  {
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    PassHash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    schema: Schema,
    timestamps: false,
  }
)

module.exports = { sequelize, credentials }
