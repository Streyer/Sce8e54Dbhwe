import {defineSupportCode} from 'cucumber';
import {browser, element, by} from 'protractor';
//import {dateFormat} from 'DateFormat';

let chai = require('chai');
chai
    .use(require('chai-things'))
    .use(require('chai-as-promised'));



//----------------------------------------------------------------------
//----------------------------------------------------------------------


var dateFormat = function () {
    var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var	_ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};



//----------------------------------------------------------------------
//----------------------------------------------------------------------











let operationVanguardWeaponCase:string = "http://steamcommunity.com/market/listings/730/Operation%20Vanguard%20Weapon%20Case";
let spectrumCaseKey:string = "http://steamcommunity.com/market/listings/730/Spectrum%202%20Case%20Key";
let waponCaseClutch:string = "http://steamcommunity.com/market/listings/730/Clutch%20Case";
let waponCaseHuntsman:string = "http://steamcommunity.com/market/listings/730/Huntsman%20Weapon%20Case";

let mysql = require('mysql');
let con:any;
function createConnection(){

     con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ruf5nogi7",
        database: "waffenkistegamma2"
    });

    con.connect(function (err: any) {
        if (err) throw err;

    });

}

function testInsert(table: string, stueckzahlkaufen: number, preiskaufen: number, stueckzahlverkaufen: number, preisverkaufen: number) {
    let now = new Date();
    let timestamp = now.format("isoDateTime");

    console.log(timestamp);
    let sql = "INSERT INTO " + table + " (stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen, datetime ) VALUES ('" + stueckzahlkaufen + "','" + preiskaufen + "','" + stueckzahlverkaufen + "','" + preisverkaufen + "','" + timestamp + "')";
    con.query(sql, function (err: any) {
        if (err) throw err;
        console.log('stueckzahlkaufen: ' + stueckzahlkaufen + ' preiskaufen: ' + preiskaufen + ' stueckzahlverkaufen: ' + stueckzahlverkaufen + ' preisverkaufen: ' + preisverkaufen);
    });
}

defineSupportCode(async ({Given, When}) => {
    browser.waitForAngularEnabled(false);

    Given(/^I am on the CS GO Market$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(operationVanguardWeaponCase);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });



    Given(/^Waffenkiste: Huntsman$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(waponCaseHuntsman);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });

    Given(/^Kistenschluessel Spectrum 2$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(spectrumCaseKey);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });

    Given(/^Waffenkiste Clutch$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(waponCaseClutch);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });



    When(/^I collect Data$/, async () => {
        createConnection();


        await  browser.driver.sleep(1000);
        let i = 0;
        let table = "operationVanguardWeaponCase";
        let counter = 0;
        let stueckzahlkaufenALT = 0;
        let stueckzahlverkaufenALT = 0;
        //let preiskaufenALT = 0;
        //let preisverkaufenALT = 0;
        let stueckzahlkaufen = 0;
        let stueckzahlverkaufen = 0;
        let preiskaufen = .0;
        let preisverkaufen = .0;
       // let liste:any=[];
       // let listeALT:any=[];

        for (i; i < 20; i++) {


                await element(by.id('market_commodity_forsale')).getText().then(function (text) {
                    let test = text.split(" ");
                    stueckzahlkaufen = parseInt(test[0]);
                    let preiskaufenFloat = parseFloat(test[5].substring(1)) * 100;
                    preiskaufen = parseInt(preiskaufenFloat.toString());
                });

                await element(by.id('market_commodity_buyrequests')).getText().then(function (text) {
                    let test = text.split(" ");
                    stueckzahlverkaufen = parseInt(test[0]);
                    let preisverkaufenFloat = parseFloat(test[5].substring(1)) * 100;
                    preisverkaufen = parseInt(preisverkaufenFloat.toString());
                });
                //console.log('neue Liste: ');
                //console.log(liste);




            await browser.getCurrentUrl().then(function (url) {
                //console.log(url);
                //return url.toString();


                if (operationVanguardWeaponCase == url) {
                    table = "operationVanguardWeaponCase";
                    // console.log("operationVanguardWeaponCase");
                    return table;
                }

                if (spectrumCaseKey  == url) {
                    table = "spectrumCaseKey";
                    // console.log("spectrumCaseKey");
                    return table;
                }


                if (waponCaseClutch == url) {
                    table = "waponCaseClutch";
                    // console.log("waponCaseClutch");
                    return table;
                }

            });





            if (((stueckzahlkaufen != stueckzahlkaufenALT) || (stueckzahlverkaufen != stueckzahlverkaufenALT)) || ((stueckzahlkaufen != stueckzahlkaufenALT) && (stueckzahlverkaufen != stueckzahlverkaufenALT))) {
                testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
                // await  browser.driver.sleep(100);
                stueckzahlkaufenALT = stueckzahlkaufen;
                stueckzahlverkaufenALT = stueckzahlverkaufen;
            }

          //  if(liste[0] != listeALT[0]){
          //      testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
          //  }
          //  if(liste[1] != listeALT[1]){
          //      testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
          //  }
          //  if(liste[2] != listeALT[2]){
          //      testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
          //  }
          //  if(liste[3] != listeALT[3]){
          //      testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
          //  }


            //testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
            //// await  browser.driver.sleep(100);

            //preiskaufenALT = preiskaufen;
            //preisverkaufenALT = preisverkaufen;
            stueckzahlkaufenALT = stueckzahlkaufen;
            stueckzahlverkaufenALT = stueckzahlverkaufen;
            //console.log('Alte Liste: ');
            //console.log(listeALT);


            await  browser.driver.sleep(100);



            //await browser.actions().mouseMove({x:100,y:100});
            //await browser.actions().mouseMove({x:-100,y:-100});

            await browser.executeScript('window.scrollTo(100,100);').then(function () {
                browser.actions().mouseMove({x:100,y:100});
            });
            //await  browser.driver.sleep(100);
            await browser.executeScript('window.scrollTo(120,120);').then(function () {
                browser.actions().mouseMove({x:-100,y:-100});
            });


            counter++;
            console.log(counter);
            i--;


        }


    });

});









