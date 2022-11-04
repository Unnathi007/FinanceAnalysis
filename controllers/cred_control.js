const sequelize = require("../utils/db_connection")
const credentials = require("./../models/credentials")
// const db = require("../utils/associations")

var cred_check = async (user) => {
  console.log(user)
  return credentials.findOne({
    where: {
      user_id: user,
    },
  })
}

var cred = cred_check("abhigna")

cred
  .then((res) => {
    console.log("success output")
    console.log(JSON.stringify(res))
  })
  .catch((err) => {
    console.log(err.message)
  })


var credUserAdd = async (user) => {
    return credentials.create({
      user_id:user.user_id,
      PassHash:user.PassHash
    })
  }
const user={
      user_id:"desani",
      PassHash:"sdfghjk"
  }
// credUserAdd(user)
//     .then((res) => {
//       console.log(JSON.stringify(res))
//     })
//     .catch((err) => {
//       console.log("hi " + err.message)
//     })
sequelize.sync().then(() => {
    console.log('Book table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error.message);
  });
  module.exports = {credUserAdd,cred_check}
// console.log(db.credentials.rawAttributes)

// add foreign key 
