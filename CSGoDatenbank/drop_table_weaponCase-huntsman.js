var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ruf5nogi7",
  database: "waffenkistegamma2"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE waponCaseHuntsman";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});