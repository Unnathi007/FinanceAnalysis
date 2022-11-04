const { addSession, getSessions } = require("./controllers/session_control");
const {
  addActivity,
  findActivities,
  getRecord,
  updateRecord,
  deleteRecord,
} = require("./controllers/userActivity_control");
const { createUser,getUser } = require("./controllers/userProfile_control");
const { credUserAdd, cred_check } = require("./controllers/cred_control");
const { generate } = require("./generate");
const express = require("express");
const sequelize = require("./utils/db_connection");
const app = express();
const Port = process.env.PORT || 9090;
app.get("/", (req, res) => {
  res.send("Hi");
});
const cors = require("cors");

const corsOptions = {
  origin: "*",

  credentials: true, //access-control-allow-credentials:true

  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));
var cookieParser = require("cookie-parser");
var session = require("express-session");
app.use(cookieParser());
app.use(
  session({
    // genid: function(req) {
    //     return genuuid() // use UUIDs for session IDs
    //   },
    secret: "34SDgsdgspxxxxxxxdfsG", // just a long random string
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,

      sameSite: "none",

      maxAge: 5000,
    },
  })
);
app.get("/", (req, res) => {
  console.log(req.sessionID);

  console.log(req.cookies);

  if (Object.keys(req.cookies).length == 0) {
    console.log(`no cookies`);

    res.cookie("session_cookie", `${req.sessionID}`, options);
  }

  res.status(555).send(req.sessionID);
});

app.get(`/logout`, (req, res) => {
  res.clearCookie("session_cookie");

  res.status(200);

  res.redirect("/");
});

app.post("/addActivity", (req, res) => {
  let sessionId = req.sessionID;
  // let user_id=req.session.cookie.user_id;
  // let sessionId='thgyhlolmyhnmvfd';
  console.log(req.body,"fw");
  const activity = {
    session_id: sessionId,
    TxnType: req.body.TxnType,
    Category: req.body.Category,
    Amount: req.body.Amount
  };
  const sessionDetails = {
    session_id: sessionId,
    user_id:req.body.user_id,// "abhigna",//req.body.user_id,
    session_timestamp: req.headers["Date"],
  };
  addSession(sessionDetails)
    .then((result) => {
      console.log("session added : ", result);
      sequelize.sync();
      addActivity(activity)
        .then((result) => {
          console.log("Activity added : ", result);
          sequelize.sync();
        })
        .catch((err) => {
          console.log("Activity can't be added : ", err.message);
          res.sendStatus(502); //.send("error : ",err.message)
        });
    })
    .catch((err) => {
      console.log("session can't be added : ", err.message);
      res.sendStatus(502); //.send("error : ",err.message)
    });
  res.sendStatus(200).send("Activity Recorded");
});
app.use(express.json({ extended: false }));
app.post("/registerUser", (req, res, next) => {
  console.log(req.body);
  const user = {
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    signup_timestamp: req.headers["Date"],
  };
  createUser(user)
    .then((result) => {
      console.log("Registered user : ", user);
      sequelize.sync();
    })
    .catch((err) => {
      console.log("register user error : ", err.message);
      res.sendStatus(502); //.send("error : ",err.message)
    });
  const cred = {
    user_id: req.body.user_id,
    PassHash: req.body.password,
  };
  credUserAdd(cred)
    .then((result) => {
      console.log("user credentials : ", cred);
      sequelize.sync();
      //res.send("User added successfully")
    })
    .catch((err) => {
      console.log("cred error : ", err.message);
      res.sendStatus(502); //.sendsend("error : ",err.message)
    });
  res.status(200).send("User added successfully");
});
app.post("/login", (req, res) => {
  let password;
  let credentials = req.body.user_id;
  cred_check(credentials)
    .then((result) => {
      console.log("Login Successful : ", result);
      password = result.PassHash;
    })
    .catch((err) => {
        console.log(credentials);
      console.log("Login errorr : ", err.message);
    });
  if (password == req.passHash) {
    req.session.user_id = req.body.user_id;
    res.status(200).send("Login Successful");
    // res.status(200).send('/home');
    // res.cookie(process.env.COOKIE_SESSIONID, sessionId, {
    //     expires: new Date(Date.now() + 60000 * 30),
    //     secure: req.protocol === 'https',
    //     path: '/',
    //   });
  } else {
    res.sendStatus(502);
  }
});
app.get("/home", (req, res) => {
  let user_id = req.query.user_id;
  console.log(user_id);
  getSessions(user_id)
    .then((result) => {
        console.log(user_id);
      //console.log("Retrieved Sessions : ", result);
      let sessions = result.map((session) => session.session_id);
      findActivities(sessions)
        .then((result) => {
           console.log("Activities Retrieved : ", result);
          //console.log(activities);
          res.json(result);
        })
        .catch((err) => {
          console.log("Activities errorr : ", err.message);
          res.sendStatus(502);
        });
    })
    .catch((err) => {
      console.log("Session errorr : ", err.message);
      res.sendStatus(502);
    });
  //console.log(JSON.stringify(activities));
   //JSON.stringify(activities));
});
app.put("/updateRecord", (req, res) => {
   console.log(req.body,req.query.id);
  let id = req.query.id;
  let record;
  let updated = {
    Amount: req.body.Amount,
    TxnType: req.body.TxnType,
  };
  let value;
  getRecord(id)
    .then((result) => {
      console.log(" Record : ", result);
      record = result;
      updateRecord(updated, record)
        .then((res) => {
          console.log("updated Activity : ", JSON.stringify(res));
          record = res;
        })
        .catch((err) => {
          console.log("updateActivity error : " + err.message);
          res.sendStatus(502);
        });
    })
    .catch((err) => {
      console.log("Error : ", err);
      res.sendStatus(502);
    });
  //console.log(res.body);
  res.status(200).send(record);
});
app.delete("/deleteRecord", (req, res) => {
  let id = req.query.id;
  let record;
  getRecord(id)
    .then((result) => {
      console.log(" Record : ", result);
      record = result;
      deleteRecord(record)
        .then((res) => {
          console.log("Delete Activity : ", JSON.stringify(res));
        })
        .catch((err) => {
          console.log("DeleteActivity error : " + err.message);
        });
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
  console.log("Deleted Record : ", record, res);
  res.sendStatus(200).send("Deleted Record : ", res);
});
app.get("/generateExpense", (req, res) => {
  let expense = generate("Expense", req.sessionID);
  console.log(expense);
  addActivity(expense)
    .then((result) => {
      console.log("Activity added : ", result);
      sequelize.sync();
    })
    .catch((err) => {
      console.log("Activity can't be added : ", err.message);
      res.sendStatus(502); //.send("error : ",err.message)
    });
  res.sendStatus(200).send("added Expense record");
});
app.get("/generateIncome", (req, res) => {
  let income = generate("Income", req.sessionID);
  // income['session_id']=req.sessionID;
  console.log(income);
  // income.session_id=req.sessionID;
  // generate('Income').then((income)=>{
  //     income['session_id']=req.sessionID;
  //     console.log("generated Income : ",income)
  // }).catch((err)=>{
  //     console.log("error generating : ",err.message)
  // })
  addActivity(income)
    .then((result) => {
      console.log("Activity added : ", result);
      sequelize.sync();
    })
    .catch((err) => {
      console.log("Activity can't be added : ", err.message);
      res.sendStatus(502); //.send("error : ",err.message)
    });
  res.sendStatus(200).send("added Income record");
});
app.get('/profile',(req,res)=>{
   let profile;
   let user_id=req.query.user_id;
   console.log(req.body,"kkk")
   getUser(user_id).then((result)=>{
    console.log(result);
    profile=result;
    res.status(200).json(result);
   }).catch((err)=>{
    console.log("Error getting Profile : ",err.message);
    res.sendStatus(502);
   })
})
app.listen(Port, () => {
  console.log("Server is running on Port : ", Port);
});
