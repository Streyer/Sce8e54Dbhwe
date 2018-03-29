var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ruf5nogi7"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE waffenkistegamma2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});