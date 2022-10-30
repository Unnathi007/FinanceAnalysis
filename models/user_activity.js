/*
This table contains SessionID, Amount, TxnType, Category
*/
const Sequelize = require("sequelize")
const sequelize = require("../utils/db_connection")
const { schema } = require("../utils/config")
const user_activity = sequelize.define(
  "user_activity",
  {
    session_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isValid: { args: true, msg: `Please enter a positive value` },
      },
    },
    TxnType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    schema: `${schema}`,
    timestamps: false,
  }
)

module.exports = user_activity
// sequelize.sync()
