const data = require("./MOCK_DATA.json");

const express = require("express");

const app = express();

const port = 9090;
const cors = require("cors");

const corsOptions = {
  origin: "*",

  credentials: true, //access-control-allow-credentials:true

  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => console.log("server running on port %s", port));

console.log(data);
