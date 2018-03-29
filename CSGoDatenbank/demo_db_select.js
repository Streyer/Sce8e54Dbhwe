var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ruf5nogi7",
  database: "waffenkistegamma2"
});

con.connect(function(err) {
  if (err) throw err;
  // habe gamma2 und gamma3 erstellt
  con.query("SELECT * FROM weaponCaseOperationVanguard", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


//let operationVanguardWeaponCase = "http://steamcommunity.com/market/listings/730/Operation%20Vanguard%20Weapon%20Case";
//let spectrumCaseKey = "http://steamcommunity.com/market/listings/730/Spectrum%202%20Case%20Key";
//let waponCaseClutch = "http://steamcommunity.com/market/listings/730/Clutch%20Case";