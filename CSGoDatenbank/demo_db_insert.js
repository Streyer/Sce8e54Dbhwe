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
  var sql = "INSERT INTO waponCaseClutch (stueckzahlkaufen,preiskaufen, stueckzahlverkaufen, preisverkaufen) VALUES ('5','333','333','333')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});