var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ruf5nogi7",
  database: "waffenkistegamma2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE weaponCaseOperationVanguard (stueckzahlkaufen int,preiskaufen int, stueckzahlverkaufen int, preisverkaufen int, datetime TIMESTAMP)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});