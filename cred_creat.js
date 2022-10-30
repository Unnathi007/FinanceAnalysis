const { sequelize, credentials } = require("./models/credentials")

/**************** Create credentials ******************/
create_cred = async (user) => {
  return credentials.create({
    user_id: `${user}`,
    PassHash: `This is ${user}`,
  })
}

/******* invoke user_credential *********/

// var user_cred = create_cred("row2ertwd34")
// user_cred.then((res) => console.log(res))

/***************************Retreive Credentials******************* */
check_cred = async (user) => {
  return credentials.findOne({
    where: {
    user_id: `${user}`,
    },
  })
}

/******** Retrive from cred table ******/

// var ret_cred = check_cred("holaa")
// ret_cred.then((res, err) => {
//   console.log(JSON.stringify(res))
// })
