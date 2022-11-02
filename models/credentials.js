const Sequelize = require("sequelize")
const sequelize = require("../utils/db_connection")

const { schema } = require("../utils/config")
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
    schema: `${schema}`,
    timestamps: false,
  }
)

module.exports = credentials

sequelize.sync()
