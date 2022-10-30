/*
This file contains the userID and SEssionID and the Timestamp of that session

timestamp can be default generated while inserting a record into the table

*/
const Sequelize = require("sequelize")
const { schema } = require("../utils/config")
const modelup = require("../models/user_profile")
const sequelize = require("../utils/db_connection")
const sessions = sequelize.define(
  "sessions",
  {
    session_id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 10],
          msg: `UserID must be unique and is 5 to 10 characters`,
        },
        notNull: { args: true, msg: `userID cannot be empty` },
      },
    },
    session_timestamp: {
      // correct it
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  },
  {
    schema: `${schema}`,
    timestamps: false,
  }
)

module.exports = sessions
// sequelize.sync()
