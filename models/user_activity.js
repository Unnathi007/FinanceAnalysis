/*
This table contains SessionID, Amount, TxnType, Category
*/
const Sequelize = require("sequelize")
const sequelize = require("../utils/db_connection")
const { schema } = require("../utils/config")
const user_activity = sequelize.define(
  "user_activities",
  {
    index:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    session_id: {
      type: Sequelize.STRING,
      allowNull: false,
      // references: {
      //   model: "sessions", //  refers to table name
      //   key: "session_id", // 'id' refers to column name in fathers table
      // },
      // validate: {
      //   isValid: { args: true, msg: `Please enter a positive value` },
      // }
    },
    Amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        // msg: `Please enter a positive value`
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
// sequelize.sync().then(() => {
//   console.log('Book table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create table : ', error.message);
// });
