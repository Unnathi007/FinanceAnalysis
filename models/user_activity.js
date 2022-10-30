/*
This table contains SessionID, Amount, TxnType, Category
*/
const Sequelize = require("sequelize")
sequelize = require("../utils/db_connection")

const user_activity = sequelize.define(
  "user_activity",
  {
    session_id: {
      type: Sequelize.STRING,
      allowNull: false,
      references:{
      model: 'sessions', //  refers to table name
      key: 'session_id' // 'id' refers to column name in fathers table
   }
      
    }
    ,
    Amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isValid: { args: true, msg: `Please enter a positive value` },
      },
    },
    TxnType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    schema: "finance",
    timestamps: false,
  }
)

module.exports = { sequelize, user_activity }
