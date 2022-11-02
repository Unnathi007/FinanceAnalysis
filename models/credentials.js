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
// credentials.then((res)=>{
//     console.log(res)
// }).catch((err)=>{console.log(err.message)})

module.exports = credentials

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Book table created successfully!")
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error.message)
//   })
