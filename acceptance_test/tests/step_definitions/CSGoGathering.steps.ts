import {defineSupportCode} from 'cucumber';
import {browser, element, by} from 'protractor';

let chai = require('chai');
chai
    .use(require('chai-things'))
    .use(require('chai-as-promised'));




let caseKeySpectrum: string = "http://steamcommunity.com/market/listings/730/Spectrum%202%20Case%20Key";
let weaponCaseClutch: string = "http://steamcommunity.com/market/listings/730/Clutch%20Case";
let weaponCaseHuntsman: string = "http://steamcommunity.com/market/listings/730/Huntsman%20Weapon%20Case";
let weaponCaseOperationVanguard: string = "http://steamcommunity.com/market/listings/730/Operation%20Vanguard%20Weapon%20Case";

let mysql = require('mysql');
let con: any;

function createConnection() {

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
    //let now = new Date();
    //let timestamp = now.format('isoDateTime');
    let timestamp = new Date().toISOString().slice(0,-5);

    //console.log(timestamp);
    let sql = "INSERT INTO " + table + " (stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen, datetime ) VALUES ('" + stueckzahlkaufen + "','" + preiskaufen + "','" + stueckzahlverkaufen + "','" + preisverkaufen + "','" + timestamp + "')";
    con.query(sql, function (err: any) {
        if (err) throw err;
        console.log('stueckzahlkaufen: ' + stueckzahlkaufen + ' preiskaufen: ' + preiskaufen + ' stueckzahlverkaufen: ' + stueckzahlverkaufen + ' preisverkaufen: ' + preisverkaufen + ' timestamp: ' + timestamp);
    });
}

defineSupportCode(async ({Given, When}) => {
    browser.waitForAngularEnabled(false);

    Given(/^I am on the CS GO Market$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(weaponCaseOperationVanguard);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });


    Given(/^Waffenkiste: Huntsman$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(weaponCaseHuntsman);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });

    Given(/^Kistenschluessel Spectrum 2$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(caseKeySpectrum);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });

    Given(/^Waffenkiste Clutch$/, async () => {
        await  browser.driver.sleep(100);
        await browser.get(weaponCaseClutch);
        await  browser.driver.sleep(100);
        //await  element(by.id('submit')).click();
        await  browser.driver.sleep(100);
    });


    When(/^I collect Data$/, async () => {
        createConnection();


        await  browser.driver.sleep(1000);
        let i = 0;
        let table = "weaponCaseOperationVanguard";
       // let counter = 0;
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


                if (weaponCaseOperationVanguard == url) {
                    table = "weaponCaseOperationVanguard";
                    // console.log("weaponCaseOperationVanguard");
                    return table;
                }

                if (caseKeySpectrum == url) {
                    table = "caseKeySpectrum";
                    // console.log("caseKeySpectrum");
                    return table;
                }


                if (weaponCaseClutch == url) {
                    table = "weaponCaseClutch";
                    // console.log("weaponCaseClutch");
                    return table;
                }


                if (weaponCaseHuntsman == url) {
                    table = "weaponCaseHuntsman";
                    // console.log("weaponCaseHuntsman");
                    return table;
                }

            });


            if (((stueckzahlkaufen != stueckzahlkaufenALT) || (stueckzahlverkaufen != stueckzahlverkaufenALT)) || ((stueckzahlkaufen != stueckzahlkaufenALT) && (stueckzahlverkaufen != stueckzahlverkaufenALT))) {
                testInsert(table, stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
                stueckzahlkaufenALT = stueckzahlkaufen;
                stueckzahlverkaufenALT = stueckzahlverkaufen;
            }

            await  browser.driver.sleep(100);

            await browser.executeScript('window.scrollTo(100,100);').then(function () {
                browser.actions().mouseMove({x: 100, y: 100});
            });
            await browser.executeScript('window.scrollTo(120,120);').then(function () {
                browser.actions().mouseMove({x: -100, y: -100});
            });


            //counter++;
            //console.log(counter);
            i--;


        }


    });

});









