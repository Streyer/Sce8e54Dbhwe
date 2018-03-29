import {defineSupportCode} from 'cucumber';
import {browser, element, by, ExpectedConditions} from 'protractor';
//import Min = Mocha.reporters.Min;

var EC = ExpectedConditions;
var chai = require('chai');
chai
  .use(require('chai-things'))
  .use(require('chai-as-promised'))
var expect = chai.expect;


var createdAssetType: string;
var editedAssetType: string;
var pricePlanValidity: string;
var pricePlanValidity2: string;
var pricePlan: string;
var endOfWeekendTime: string;
var endOfWeekendDay: string;
var startOfWeekendDay: string;
var startOfWeekendTime: string;
var emptyPricePlan: string;
var hoursPlus = element(by.cssContainingText('[class="timeUnitBlock"]', 'Hours')).element(by.className('timeUnitElementButtons')).element(by.css('[icon="plus"]'));
var hoursMinus = element(by.cssContainingText('[class="timeUnitBlock"]', 'Hours')).element(by.className('timeUnitElementButtons')).element(by.css('[icon="minus"]'));
var daysPlus = element(by.cssContainingText('[class="timeUnitBlock"]', 'Days')).element(by.className('timeUnitElementButtons')).element(by.css('[icon="plus"]'));
var daysMinus = element(by.cssContainingText('[class="timeUnitBlock"]', 'Days')).element(by.className('timeUnitElementButtons')).element(by.css('[icon="minus"]'));


defineSupportCode(async ({Given, When, Then}) => {



    Given(/^I am a logged in User$/, async () => {
        await  browser.driver.sleep(1000);
        await browser.get(browser.baseUrl);
        await  browser.driver.sleep(1000);
        await expect(element(by.id('greeting')).getText()).to.eventually.equal('Login');
        await  element(by.id('email')).sendKeys(browser.params.login.email);
        await  element(by.id('password')).sendKeys(browser.params.login.passwd);
        await  browser.driver.sleep(1000);
        await browser.waitForAngular();
        await  element(by.id('submit')).click();
        await  browser.driver.sleep(1000);
    });

    Given(/^I switched to the Pricing Tab$/, async () => {
        await browser.waitForAngular();
        await  browser.driver.sleep(3000);
        await element(by.css('[href="/pricing"]')).click();
        await browser.waitForAngular();
        await  browser.driver.sleep(3000);
        await expect(element(by.cssContainingText('h4', 'Price Plans and Pricing Assets')).getText()).to.eventually.equal('Price Plans and Pricing Assets');
        await browser.waitForAngular();


    });


    Given(/^the Price Plan Overview List should be visible$/, async () => {
        await browser.waitForAngular();
        await  browser.driver.sleep(1000);
        await element(by.css('div[class="aui-table aui-table--stretched"] table')).isDisplayed();
    });

  Given(/^I create a new price plan$/, async () => {
    browser.waitForAngular();
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    browser.waitForAngular();
    await expect(element(by.className('title-text')).getText()).to.eventually.equal('Audi mobility dashboard');
    await expect(element(by.className('aui-headline-4')).getText()).to.eventually.equal('Price Plans and Pricing Assets');
    await expect(element(by.className('aui-button__text')).getText()).to.eventually.equal('List Pricing Assets');
    await expect(element(by.cssContainingText('span', 'Create a Price Plan')).getText()).to.eventually.equal('Create a Price Plan');
    await expect(element(by.cssContainingText('span', 'Create a Price Plan')).click());
    await console.log('I create a new price plan');
  });


  Given(/^I click "List Pricing Assets"$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await browser.sleep(500);
    await expect(element(by.className('title-text')).getText()).to.eventually.equal('Audi mobility dashboard');
    await expect(element(by.className('aui-headline-4')).getText()).to.eventually.equal('Price Plans and Pricing Assets');
    await expect(element(by.className('aui-button__text')).getText()).to.eventually.equal('List Pricing Assets');
    await expect(element(by.cssContainingText('span', 'List Pricing Assets')).getText()).to.eventually.equal('List Pricing Assets');
    await expect(element(by.cssContainingText('span', 'List Pricing Assets')).click());
    await console.log('I click "List Pricing Assets"');

  });

  Then(/^I set the price group to "([^"]*)"$/, async (tripType: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await element(by.cssContainingText('option', tripType)).click();
    await console.log('I set the price group to ' + tripType);
    await browser.sleep(20);


  });

  When(/^I set the price group name to "([^"]*)"$/, async (priceGroup: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await expect(element(by.className('aui-headline-4')).getText()).to.eventually.equal('Create a Price Plan');

    var date = new Date();
    await console.log(date);
    await  element(by.id('textfield-0')).sendKeys(priceGroup);
    await console.log('I set the price group name to ' + priceGroup);
  });


  When(/^I set the price group name to "([^"]*)" and the current Date$/, async (priceGroup: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await browser.sleep(5000);
    await expect(element(by.className('aui-headline-4')).getText()).to.eventually.equal('Create a Price Plan');
    var date = new Date();
    emptyPricePlan = priceGroup + " " + date;
    await  element(by.css('[class="aui-textfield__input"]')).sendKeys(emptyPricePlan);
    await console.log('I set the price group name to ' + priceGroup);

  });


  When(/^I set the price group name as the earlyer created$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await browser.sleep(5000);
    await expect(element(by.className('aui-headline-4')).getText()).to.eventually.equal('Create a Price Plan');
    await console.log('I set the price group name as the earlyer created');
    await  element(by.css('[class="aui-textfield__input"]')).sendKeys(emptyPricePlan);

  });


  When(/^I click on "Pricing"$/, async () => {
    await element(by.css('[href="/pricing"]')).click();
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await expect(element(by.css('[class="aui-headline-4"]')).getText()).to.eventually.equal('Price Plans and Pricing Assets');
    await browser.sleep(1000);
    await console.log('I click on "Pricing"');
  });


  Then(/^I select the price plan I want to copy: "([^"]*)"$/, async (selectedPricePlan: string) => {
    await element(by.cssContainingText('option', selectedPricePlan)).click();
    await console.log('I select the price plan I want to copy: ' + selectedPricePlan);
    await browser.sleep(200);
  });


  Then(/^I click the Clone from existing Price Plan Button$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await element(by.css('[formcontrolname="doClone"]')).click();
    await browser.sleep(200);
    await console.log('I click the Clone from existing Price Plan Button');
  });

  Given(/^I click "Add Pricing Asset"$/, async () => {
    browser.waitForAngular();
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await browser.waitForAngular();
    await expect(element(by.className('title-text')).getText()).to.eventually.equal('Audi mobility dashboard');
    await expect(element(by.className('aui-headline-4')).getText()).to.eventually.equal('Pricing Assets');
    await expect(element(by.cssContainingText('span', 'Add Pricing Asset')).getText()).to.eventually.equal('Add Pricing Asset');
    await expect(element(by.cssContainingText('span', 'Add Pricing Asset')).click());
    await browser.sleep(3000);
    await console.log('I click "Add Pricing Asset"');
  });


  When(/^I set the Display Name to "([^"]*)" and the current Date$/, async (displayName: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/pricing_assets'), 5000);
    await browser.sleep(5000);
    await expect(element(by.cssContainingText('h3', 'Create Pricing Asset')).getText()).to.eventually.equal('Create Pricing Asset');
    var date = new Date();
    await console.log(date);
    createdAssetType = (displayName + " " + date).toString();
    await console.log(createdAssetType);
    await  element(by.className('aui-textfield__input')).sendKeys(createdAssetType);
    await console.log('I set the Display Name to ' + createdAssetType);
    await browser.sleep(1000);
    browser.waitForAngular();
  });

  When(/^I set the Display Name to the same Name as the first Asset$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/pricing_assets'), 5000);
    await browser.sleep(5000);
    await expect(element(by.cssContainingText('h3', 'Create Pricing Asset')).getText()).to.eventually.equal('Create Pricing Asset');
    await  element(by.className('aui-textfield__input')).sendKeys(createdAssetType);
    await console.log('I set the Display Name to the same Name as the first Asset');
    await browser.sleep(1000);
    browser.waitForAngular();
  });

  Then(/^I save the new Price Plan$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await element(by.cssContainingText('span', 'Save')).click();
    await console.log('I save the new Price Plan');
    await browser.sleep(10000);
    await expect(element(by.cssContainingText('.topItemHeadline', 'Weekend')).getText()).to.eventually.equal('Weekend');
  });


  Then(/^I save the copied Price Plan$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/create'), 5000);
    await element(by.cssContainingText('span', 'Save')).click();
    await console.log('I save the copied Price Plan');
    await browser.sleep(1000);
    await  browser.wait(EC.urlContains('/price_plans/create-clone-from/'), 5000);

  });

  Then(/^I set the Type to "([^"]*)"$/, async (assetType: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/pricing_assets'), 5000);
    await element(by.cssContainingText('option', assetType)).click();
    await console.log('I set the Type to ' + assetType);
    browser.waitForAngular();
  });


  Then(/^I edit the Pricing Asset "([^"]*)"$/, async (editedAssetType1: string) => {
    editedAssetType = editedAssetType1;
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/pricing_assets'), 5000);
    await browser.sleep(1000);
    await element(by.cssContainingText('tr', editedAssetType)).element(by.css('button')).click();
    await console.log('I edit the Pricing Asset ' + editedAssetType);
    await browser.sleep(1000);
    await browser.waitForAngular();
  });


  Then(/^change the Display name to "([^"]*)"$/, async (editedAssetType1: string) => {
    createdAssetType = editedAssetType1;
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/pricing_assets'), 5000);
    await browser.sleep(1000);
    await  element(by.cssContainingText('fieldset', 'Display Name')).element(by.css('input')).clear();
    await  element(by.cssContainingText('fieldset', 'Display Name')).element(by.css('input')).sendKeys(createdAssetType);
    await console.log('change the Display name to ' + createdAssetType);
    await browser.sleep(1000);
    browser.waitForAngular();
  });


  Then(/^I see the created Pricing Asset in the List$/, async () => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/pricing_assets'), 5000);
    await browser.sleep(5000);
    await expect(element(by.cssContainingText('td', createdAssetType)).getText()).to.eventually.equal(createdAssetType);
    await console.log('I see the created Pricing Asset in the List');
    browser.waitForAngular();
  });


  Then(/^I click the Save Button$/, async () => {
    await element(by.cssContainingText('span', 'Save')).click();
    await console.log('I click the Save Button');
    browser.waitForAngular();
  });


  Then(/^I remove two Assets$/, async () => {
    await browser.waitForAngular();
    await browser.actions().mouseMove(element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[1]/div[5]/button'))).perform();
    browser.waitForAngular();
    await element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[1]/div[4]/div/app-vehicle-rental-by-duration-atomic-tool-level-1-form/div/div[1]/div[1]/div[1]/div/button')).click();
    await console.log('I remove two Assets');
    browser.waitForAngular();
    await browser.waitForAngular();
    await element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[1]/div[3]/div/app-vehicle-rental-by-duration-atomic-tool-level-1-form/div/div[1]/div[1]/div[1]/div/button')).click();
    browser.waitForAngular();

  });

  Then(/^I save the configured Price Plan$/, async () => {
    await browser.executeScript('window.scrollTo(400,0);').then(function () {
      browser.sleep(3000);
    }).then(function () {
      element(by.cssContainingText('span', ' Save Price Plan ')).click();
    });
    await console.log('I save the configured Price Plan');
    await browser.sleep(2000);
  });


  Then(/^I go back to the Price Plan Overview$/, async () => {
    await element(by.cssContainingText('[href="/pricing"]', 'Pricing')).click();
    await browser.sleep(2000);
    await browser.waitForAngular();
    await console.log('I go back to the Price Plan Overview');
    await browser.sleep(52000);


  });

  Then(/^a Price Plan "([^"]*)"$/, async (arg1: string) => {
    pricePlan = arg1;
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await expect(element(by.cssContainingText('td', pricePlan)).getText()).to.eventually.equal(pricePlan);
    //await element(by.cssContainingText('tr', pricePlan)).element(by.cssContainingText('button', 'Create a Price Plan Version')).click();
    await element(by.cssContainingText('tr', pricePlan)).element(by.css('button')).click();
    await console.log('a Price Plan ' + pricePlan);
    await browser.waitForAngular();
    await browser.sleep(5000);

  });

  Then(/^a empty Price Plan$/, async () => {
    pricePlan = emptyPricePlan;
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await expect(element(by.cssContainingText('td', pricePlan)).getText()).to.eventually.equal(pricePlan);
    await element(by.cssContainingText('tr', pricePlan)).element(by.css('button')).click();
    await console.log('a empty Price Plan');
    browser.waitForAngular();

  });


  Then(/^I change the Start of Weekend to (.*), (.*):(.*):(.*)$/, async (Day: string, Hour: any, Minute: any, Second: any) => {
    startOfWeekendDay = Day;
    startOfWeekendTime = Hour + ':' + Minute + ':' + Second;
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await element(by.cssContainingText('option', Day)).click();
    await console.log(Hour + Minute + Second);
    await element(by.css('[formcontrolname="startOfWeekendSecondsOfDayHhmmss"]')).element(by.css('input')).clear();
    await element(by.css('[formcontrolname="startOfWeekendSecondsOfDayHhmmss"]')).element(by.css('input')).sendKeys(startOfWeekendTime);
    await browser.sleep(1000);
    await console.log('I change the Start of Weekend to ' + startOfWeekendDay)
  });


  Then(/^I change the End of Weekend to (.*), (.*):(.*):(.*)$/, async (Day: string, Hour: any, Minute: any, Second: any) => {
    endOfWeekendDay = Day;
    endOfWeekendTime = Hour + ':' + Minute + ':' + Second;
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await browser.sleep(5000);
    await element(by.css('[formcontrolname="endOfWeekendDay"]')).element(by.cssContainingText('option', Day)).click();

    await element(by.cssContainingText('option', Day)).click();
    await element(by.css('[formcontrolname="endOfWeekendSecondsOfDayHhmmss"]')).element(by.css('input')).clear();
    await element(by.css('[formcontrolname="endOfWeekendSecondsOfDayHhmmss"]')).element(by.css('input')).sendKeys(endOfWeekendTime);
    await browser.sleep(1000);
    await console.log('I change the End of Weekend to ' + endOfWeekendDay)

  });


  Then(/^I check the validity of Price Plan "([^"]*)"$/, async (pricePlan: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await expect(element(by.cssContainingText('td', pricePlan)).getText()).to.eventually.equal(pricePlan);
    await element(by.cssContainingText('tr', pricePlan)).element(by.className('aui-button__text')).getText().then(function (text) {
      pricePlanValidity = text;
    });

    await console.log('I check the validity of Price Plan: ' + pricePlanValidity);
    await browser.waitForAngular();

  });


  Then(/^the error message is displayed: "([^"]*)"$/, async (errorMessage: string) => {
    await expect(element(by.className('aui-textfield__error')).getText()).to.eventually.equal(errorMessage);
    await console.log('the error message is displayed: ' + errorMessage);
  });


  Then(/^I check if a new Version of Price Plan "([^"]*)" was created$/, async (pricePlan: string) => {
    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing'), 5000);
    await expect(element(by.cssContainingText('td', pricePlan)).getText()).to.eventually.equal(pricePlan);
    await browser.sleep(3000);
    await expect(element(by.cssContainingText('tr', pricePlan)).element(by.className('aui-button__text')).getText()).not.to.eventually.equal(pricePlanValidity);
    await element(by.cssContainingText('tr', pricePlan)).element(by.className('aui-button__text')).getText().then(function (text) {
      pricePlanValidity2 = text;
    });
    await expect(element(by.cssContainingText('tr', pricePlan)).element(by.className('aui-button__text')).getText()).to.eventually.equal(pricePlanValidity2);
    await console.log('I check if a new Version of Price Plan ' + pricePlan + 'was created');
    await browser.sleep(1000);
    browser.waitForAngular();

  });


  Then(/^I configure the price plan with (.*) hours and (.*) days, containing the pricing assets: (.*), (.*), (.*), (.*)$/, async (hours: any, days: any, asset1: string, asset2: string, asset3: string, asset4: string) => {
    var assetAmount = [asset1, asset2, asset3, asset4];
    var fieldTypes = ["priceOnWeekday", "priceOnWeekend", "includedMileage"];

    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/'), 5000);
    await console.log('I configure the price plan with ' + hours + 'hours and ' + days + ' days, containing the pricing assets:  ' + asset1 + ', ' + asset2 + ', ' + asset3 + ', ' + asset4);
    await browser.sleep(1000);
    await element(by.cssContainingText('option', asset1)).click();
    await element(by.className('miniButton')).click();
    await element(by.cssContainingText('option', asset2)).click();
    await element(by.className('miniButton')).click();
    await element(by.cssContainingText('option', asset3)).click();
    await element(by.className('miniButton')).click();
    await element(by.cssContainingText('option', asset4)).click();
    await element(by.className('miniButton')).click();

    await element(by.cssContainingText('option', 'Hours')).click();
    await element(by.className('timeUnitAddWrapper')).element(by.className('miniButton')).click();
    await element(by.cssContainingText('option', 'Days')).click();

    await element(by.className('timeUnitAddWrapper')).element(by.className('miniButton')).click();


    await daysPlus.click();
    await daysMinus.click();
    await hoursPlus.click();
    await hoursMinus.click();


    await  browser.actions().mouseMove(daysPlus).perform().then(function () {

      for (var i = 0; i < hours; i++) {
        browser.actions().mouseMove(daysPlus).perform();
        hoursPlus.click();
      }
    });
    await browser.actions().mouseMove(hoursMinus).perform();
    await hoursMinus.click();

    await  browser.actions().mouseMove(daysMinus).perform().then(function () {

      for (var i = 0; i < days; i++) {
        browser.actions().mouseMove(element(by.cssContainingText('span', 'extra mileage'))).perform();
        daysPlus.click();
      }
    });
    await browser.actions().mouseMove(element(by.cssContainingText('span', 'extra mileage'))).perform();
    await daysMinus.click();


    await browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 0; i <= hours; i++) {
        for (var j = 0; j < fieldTypes.length; j++) {
          for (var k = 0; k < assetAmount.length; k++) {


            element(by.cssContainingText('app-vehicle-rental-by-duration-atomic-tool-level-1-form', assetAmount[k])).element(by.css('app-vehicle-rental-by-duration-atomic-tool-level-3-form:nth-child(' + (i + 1) + ')')).element(by.css('[formcontrolname="' + fieldTypes[j] + '"]')).clear();
          }
        }
      }
    });


    await browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 0; i <= hours; i++) {
        for (var j = 0; j < fieldTypes.length; j++) {
          for (var k = 0; k < assetAmount.length; k++) {


            element(by.cssContainingText('app-vehicle-rental-by-duration-atomic-tool-level-1-form', assetAmount[k])).element(by.css('app-vehicle-rental-by-duration-atomic-tool-level-3-form:nth-child(' + (i + 1) + ')')).element(by.css('[formcontrolname="' + fieldTypes[j] + '"]')).sendKeys(Math.round(Math.random() * 10000) / 100);
          }
        }
      }
    });


    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        for (var ii = 0; ii <= days; ii++) {
          for (var iii = 1; iii <= 3; iii++) {
            element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[1]/div[' + i + ']/div/app-vehicle-rental-by-duration-atomic-tool-level-1-form/div/div[2]/div[2]/app-vehicle-rental-by-duration-atomic-tool-level-2-form/div/div/app-vehicle-rental-by-duration-atomic-tool-level-3-form[' + (ii + 1) + ']/div/div/div[' + iii + ']/input')).clear();
          }
        }
      }
    });


    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        for (var ii = 0; ii <= days; ii++) {
          for (var iii = 1; iii <= 3; iii++) {
            element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[1]/div[' + i + ']/div/app-vehicle-rental-by-duration-atomic-tool-level-1-form/div/div[2]/div[2]/app-vehicle-rental-by-duration-atomic-tool-level-2-form/div/div/app-vehicle-rental-by-duration-atomic-tool-level-3-form[' + (ii + 1) + ']/div/div/div[' + iii + ']/input')).sendKeys(Math.round(Math.random() * 10000) / 100);
          }
        }
      }
    });

    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[2]/div[' + i + ']/app-unit-quantities-atomic-tool-level-1-form/div/div/div/app-unit-quantities-atomic-tool-level-2-form/div/div/app-unit-quantities-atomic-tool-level-3-form/div/div/input')).clear();
      }
    });

    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[2]/div[' + i + ']/app-unit-quantities-atomic-tool-level-1-form/div/div/div/app-unit-quantities-atomic-tool-level-2-form/div/div/app-unit-quantities-atomic-tool-level-3-form/div/div/input')).sendKeys(Math.round(Math.random() * 10000) / 100);
      }
    });


    await  browser.sleep(10000);

  });

  Then(/^I update the price plan with (.*) hours and (.*) days, containing the pricing assets: (.*), (.*), (.*), (.*)$/, async (hours: any, days: any, asset1: string, asset2: string, asset3: string, asset4: string) => {


    var assetAmount = [asset1, asset2, asset3, asset4];
    var fieldTypes = ["priceOnWeekday", "priceOnWeekend", "includedMileage"];

    await  browser.wait(EC.urlContains('https://dashboard.sandbox.eu-west-1.apps.msi.audi.com/pricing/scopes/'), 5000);
    await console.log('I configure the price plan with ' + hours + 'hours and ' + days + ' days, containing the pricing assets:  ' + asset1 + ', ' + asset2 + ', ' + asset3 + ', ' + asset4);

    await browser.actions().mouseMove(daysPlus).perform().then(function () {
      console.log('=============================');
      for (var i = 0; i <= hours; i++) {
        for (var j = 0; j < fieldTypes.length; j++) {
          for (var k = 0; k < assetAmount.length; k++) {


            element(by.cssContainingText('app-vehicle-rental-by-duration-atomic-tool-level-1-form', assetAmount[k])).element(by.css('app-vehicle-rental-by-duration-atomic-tool-level-3-form:nth-child(' + (i + 1) + ')')).element(by.css('[formcontrolname="' + fieldTypes[j] + '"]')).clear();
          }
        }
      }
    });


    await browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 0; i <= hours; i++) {
        for (var j = 0; j < fieldTypes.length; j++) {
          for (var k = 0; k < assetAmount.length; k++) {


            element(by.cssContainingText('app-vehicle-rental-by-duration-atomic-tool-level-1-form', assetAmount[k])).element(by.css('app-vehicle-rental-by-duration-atomic-tool-level-3-form:nth-child(' + (i + 1) + ')')).element(by.css('[formcontrolname="' + fieldTypes[j] + '"]')).sendKeys(Math.round(Math.random() * 10000) / 100);
          }
        }
      }
    });


    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        for (var ii = 0; ii <= days; ii++) {
          for (var iii = 1; iii <= 3; iii++) {
            element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[1]/div[' + i + ']/div/app-vehicle-rental-by-duration-atomic-tool-level-1-form/div/div[2]/div[2]/app-vehicle-rental-by-duration-atomic-tool-level-2-form/div/div/app-vehicle-rental-by-duration-atomic-tool-level-3-form[' + (ii + 1) + ']/div/div/div[' + iii + ']/input')).clear();

          }
        }
      }
    });


    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        for (var ii = 0; ii <= days; ii++) {
          for (var iii = 1; iii <= 3; iii++) {
            element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[1]/div[' + i + ']/div/app-vehicle-rental-by-duration-atomic-tool-level-1-form/div/div[2]/div[2]/app-vehicle-rental-by-duration-atomic-tool-level-2-form/div/div/app-vehicle-rental-by-duration-atomic-tool-level-3-form[' + (ii + 1) + ']/div/div/div[' + iii + ']/input')).sendKeys(Math.round(Math.random() * 10000) / 100);
          }
        }
      }
    });

    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[2]/div[' + i + ']/app-unit-quantities-atomic-tool-level-1-form/div/div/div/app-unit-quantities-atomic-tool-level-2-form/div/div/app-unit-quantities-atomic-tool-level-3-form/div/div/input')).clear();
      }
    });

    await          browser.actions().mouseMove(daysPlus).perform().then(function () {
      for (var i = 1; i <= assetAmount.length; i++) {
        element(by.xpath('html/body/amd-dashboard/ng-component/ng-component/div/div/app-audi-shared-fleet-product-tool-form/form/fieldset/div[5]/div[2]/div[' + i + ']/app-unit-quantities-atomic-tool-level-1-form/div/div/div/app-unit-quantities-atomic-tool-level-2-form/div/div/app-unit-quantities-atomic-tool-level-3-form/div/div/input')).sendKeys(Math.round(Math.random() * 10000) / 100);
      }
    });


    await  browser.sleep(1000);
  });

});









