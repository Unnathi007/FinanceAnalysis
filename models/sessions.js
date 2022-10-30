/*
This file contains the userID and SEssionID and the Timestamp of that session

timestamp can be default generated while inserting a record into the table

*/
const Sequelize = require("sequelize")
sequelize = require("../utils/db_connection")

const sessions = sequelize.define(
  "sessions",
  {
    session_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true,
        
      },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'users_profile', //  refers to table name
            key: 'user_id' //  refers to column name in fathers table
         },
        validate: {
          len: {
            args: [5, 10],
            msg: `UserID must be unique and is 5 to 10 characters`,
          },
          notNull: { args: true, msg: `userID cannot be empty` },
        },
    },
    session_timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      }
  },
  {
    schema: "finance",
    timestamps: false,
  }
)

module.exports = { sequelize, sessions }

