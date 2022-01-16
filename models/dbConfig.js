const mysql = require("mysql");

const pool = mysql.createPool({
  host: "mysql_server",
  user: "test",
  password: "test",
  database: "books",
});

module.exports = pool;
// const mysql = require("mysql");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "test",
//   password: "test",
//   database: "books",
// });

// module.exports = pool;
