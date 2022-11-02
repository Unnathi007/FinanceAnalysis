const { session_add } = require("./controllers/session_control")
const { activity_add } = require("./controllers/user_act_control")
const { user_create } = require("./controllers/user_pro_control")
const { cred_insert, cred_check } = require("./controllers/cred_control")
const express = require("express")
const sequelize = require("./utils/db_connection")
const app = express()
const Port = process.env.PORT || 9090
app.use(express.json({ extended: false }))
var cookieParser = require("cookie-parser")
var session = require("express-session")
app.use(express.json({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    // genid: function(req) {
    //     return genuuid() // use UUIDs for session IDs
    //   },
    secret: "34SDgsdgspxxxxxxxdfsG", // just a long random string
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
)

app.get("/", (req, res) => {
  //console.log(req)
  res.send(req.body)
})

app.post("/addExpense", (req, res) => {
  let sessionId = req.sessionID

  const activity = {
    session_id: sessionId,
    TxnType: req.body.TxnType,
    Category: req.body.Category,
    Amount: req.body.Amount,
  }
  const sessionDetails = {
    session_id: sessionId,
    user_id: req.body.user_id,
    session_timestamp: req.headers["Date"],
  }
  session_add(sessionDetails)
    .then((result) => {
      //console.log("session added : ", result)
      sequelize.sync()
      activity_add(activity)
        .then((result) => {
          //console.log("Activity added : ", result)
          sequelize.sync()
        })
        .catch((err) => {
          //console.log("Activity can't be added : ", err.message)
          res.sendStatus(502) //.send("error : ",err.message)
        })
    })
    .catch((err) => {
      //console.log("session can't be added : ", err.message)
      res.sendStatus(502) //.send("error : ",err.message)
    })
  res.sendStatus(200).send("Activity Recorded")
})
app.post("/registerUser", (req, res, next) => {
  console.log(req.body)
  const user = {
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    signup_timestamp: req.headers["Date"],
  }
  user_create(user)
    .then((result) => {
      console.log("Registered user : ", user)
      sequelize.sync()
    })
    .catch((err) => {
      console.log("register user error : ", err.message)
      res.sendStatus(502) //.send("error : ",err.message)
    })
  const cred = {
    user_id: req.body.user_id,
    PassHash: req.body.PassHash,
  }
  cred_insert(cred)
    .then((result) => {
      console.log("user credentials : ", cred)
      sequelize.sync()
      //res.send("User added successfully")
    })
    .catch((err) => {
      console.log("cred error : ", err.message)
      res.sendStatus(502) //.sendsend("error : ",err.message)
    })
  res.status(200).send("User added successfully")
})
app.post("/login", (req, res) => {
  let password
  let credentials = req.body.user_id
  cred_check(credentials)
    .then((result) => {
      console.log("Login Successful : ", result)
      password = result.PassHash
    })
    .catch((err) => {
      console.log("Login errorr : ", err.message)
    })
  if (password == req.passHash) {
    req.session.user_id = req.body.user_id
    res.status(200).send("Login Successful")
    // res.status(200).send('/home');
    // res.cookie(process.env.COOKIE_SESSIONID, sessionId, {
    //     expires: new Date(Date.now() + 60000 * 30),
    //     secure: req.protocol === 'https',
    //     path: '/',
    //   });
  } else {
    res.sendStatus(502)
  }
})
app.listen(Port, () => {
  console.log("Server is running on Port : ", Port)
})
