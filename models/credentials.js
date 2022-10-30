const Sequelize = require("sequelize")
sequelize = require("../utils/db_connection")
const {schema}=require("../utils/config");
const credentials = sequelize.define(
  "credentials",
  {
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'user_profile', //  refers to table name
        key: 'user_id' // 'id' refers to column name in fathers table
     }
    },
    PassHash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {

    schema: `${schema}`,

    timestamps: false,
  }
)

module.exports = { sequelize, credentials }
