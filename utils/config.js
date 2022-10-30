require("dotenv").config({ path: __dirname + "/./../.env" })

// if (result.error) {
//   throw result.error
// }

module.exports = {
  db_port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  app_port: process.env.SERVER_PORT,
  host: process.env.HOST,
  schema:process.env.SCHEMA
}
console.log(module.exports)
