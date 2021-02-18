const mysql = require("mysql");
require("dotenv").config(); 

let connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,#257976QXZIcjkg,
    database: "burgers_db",
  });
}


connection.connect();

module.exports = connection;