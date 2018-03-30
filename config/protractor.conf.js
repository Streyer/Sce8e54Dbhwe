var path = require('path');
var fs = require('fs');

var logPath = path.resolve(__dirname, '../.test-results/');

exports.config = {
    //baseUrl: 'localhost:8080/coupon',
    SELENIUM_PROMISE_MANAGER: false,
    //getPageTimeout: 60000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // TODO add all specs
    specs: ['../acceptance_test/tests/*'],
    //allScriptsTimeout: 3 * 60 * 100,
    keepAlive: false,

    useAllAngular2AppRoots: true,

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {args: [ "--headless", "--disable-gpu", "--window-size=1500,950" ]},
        //shardTestFiles: true,
        //maxInstances: 4

    },

    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        strict: true,
        format: 'json:.test-results/e2e-test-results.json',
        require: ['cucumber-timeout.js', '../acceptance_test/tests/step_definitions/*']
    },

    beforeLaunch: function () {
        // Create path if they not exist...
        fs.existsSync(logPath) || fs.mkdirSync(logPath);
    },

    onPrepare: function () {
        // size of the screenshots created
        var width = 1500;
        var height = 950;
        browser.driver.manage().window().setSize(width, height);                                    
    },

    params: {
        login: {
            email: 'default',
            passwd: 'default'
        }
    },

    suites: {
        rifle_ak47_safariMesh: '../acceptance_test/tests/rifle-ak47_safariMesh.feature'
    },

    directConnect: true
};


