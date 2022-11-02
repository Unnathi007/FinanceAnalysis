const Sequelize = require("sequelize")
const { schema } = require("../utils/config")
const sequelize = require("../utils/db_connection")

const user_profile = sequelize.define(

  "users_profiles",

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
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
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
    schema: `${schema}`,
    timestamps: false,
  }
)

module.exports = user_profile
// sequelize.sync()
// const main = async () => {
//   try {
//     await sequelize.sync(
//     );
//     process.exit(0); // exit code 0 is normal
//   } catch (err) {
//     // this will show the error
//     console.log('There was an error!', err.message);
//   }
// }node user_a
// main();
