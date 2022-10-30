const sequelize = require("../utils/db_connection")
const credentials = require("./../models/credentials")
const db = require("../utils/associations")

var cred_check = async (user) => {
  console.log(user)
  return db.credentials.findOne({
    where: {
      user_id: user,
    },
  })
}

var cred = cred_check("ark123")

cred
  .then((res) => {
    console.log("success output")
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log(err.message)
  })


var credUserAdd = async (user) => {
    return db.credentials.create({
      user_id:user.user_id,
      PassHash:user.passHash
    })
  }
const user={
      user_id:"abhigna123",
      passHash:"sdfghjk"
  }
credUserAdd(user)
    .then((res) => {
      console.log(JSON.stringify(res))
    })
    .catch((err) => {
      console.log("hi " + err.message)
    })
sequelize.sync()
// console.log(db.credentials.rawAttributes)

// add foreign key 
