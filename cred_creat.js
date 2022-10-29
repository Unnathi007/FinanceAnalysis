const express = require("express")
const { sequelize, credentials } = require("./models/credentials")

sequelize.sync()
credentials
  .create({
    user_id: "hozcvlaa",
    PassHash: "Heyisthisresdfasdfsdfallyworking",
  })
  .then(() => {
    console.log(`Credentials created successfully !!!`)
  })
  .catch((err) => {
    console.log("Credentials already Existed !!!")
  })
  .finally(() => {
    sequelize.close()
    console.log(`sequelize closed successfully`)
  })
