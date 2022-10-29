const Sequelize = require("sequelize")
sequelize = require("../utils/db_connection")

const user_profile = sequelize.define(
  "user_profile",
  {
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: {
          args: [5, 10],
          msg: `UserID must be unique and is 5 to 10 characters`,
        },
        notNull: { args: true, msg: `userID cannot be empty` },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { args: true, msg: `Please enter a valid email Address` },
      },
    },
    phone: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    role_id: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: `user`,
    },
    signup_timestamp: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  },
  {
    schema: "finance",
    timestamps: false,
  }
)

module.exports = { sequelize, user_profile }
