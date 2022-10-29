const express = require("express")
const { sequelize, user_profile } = require("./models/user_profile")

sequelize.sync().then(() => {
  user_profile
    .create({
      // user_id: "overnight",
      // email: "Heyisthisreally@working.com",
      //phone: 9183745464,
    })
    .then(() => {
      console.log(`user_profile created successfully !!!`)
    })
    .catch((err) => {
      console.log("user_profile already Existed !!!")
    })
    .finally(() => {
      sequelize.close()
      console.log(`sequelize closed successfully`)
    })
})
