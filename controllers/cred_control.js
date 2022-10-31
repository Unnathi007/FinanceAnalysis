const sequelize = require("../utils/db_connection")
const credentials = require("./../models/credentials")

// Retreive PassHash using user_id

const cred_check = async (user) => {
  return credentials.findOne({
    where: {
      user_id: user,
    },
  })
}

/*********************** */

// Insert record user_id, PassHash

const cred_insert = (user, pass) => {
  //console.log(user, pass)
  return credentials.create({
    user_id: user,
    PassHash: pass,
  })
}

/***************************** */

// Delete record using user_id

const cred_delete = (user) => {
  return credentials.destroy({
    where: {
      user_id: user,
    },
  })
}

/****************************** */
//Update record using user_id,pass
// in credentials table only.

const cred_update = (user, pass) => {
  return credentials.update(
    {
      PassHash: pass,
    },
    { where: { user_id: user } }
  )
}

module.exports = { cred_check, cred_insert, cred_update, cred_delete }

//sequelize.sync()
