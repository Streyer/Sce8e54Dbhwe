/*
Increase default cucumber timeout to avoid "faulty" timeouts on slow machines
See https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/timeouts.md
*/
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({setDefaultTimeout}) {
    setDefaultTimeout();
});
