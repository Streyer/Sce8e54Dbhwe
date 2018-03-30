import {defineSupportCode} from 'cucumber';
import {browser, element, by} from 'protractor';
import {createConnection, testInsert, queryForLastPrice} from './CSGoGathering.steps'

let chai = require('chai');
chai
    .use(require('chai-things'))
    .use(require('chai-as-promised'));


defineSupportCode(async ({Given, When}) => {
    browser.waitForAngularEnabled(false);

    Given(/^AK-47 - Safari Meshasdf$/, async () => {

    });

    When(/^get the current Prices for AK47 Safari Mesh$/, async () => {
        createConnection();
        let stueckzahlkaufen = 0;
        let preiskaufen = 0;
        let stueckzahlverkaufen = 0;
        let preisverkaufen = 0;

        await browser.sleep(1000);
        await element(by.id('market_commodity_buyrequests')).getText().then(function (text) {
            let test = text.split(" ");
            stueckzahlverkaufen = parseInt(test[0]);
            let preisverkaufenFloat = parseFloat(test[5].substring(1)) * 100;
            preisverkaufen = parseInt(preisverkaufenFloat.toString());
        });

        testInsert("rifleAk47SafariMesh", stueckzahlkaufen, preiskaufen, stueckzahlverkaufen, preisverkaufen);
        queryForLastPrice();

    });

});









