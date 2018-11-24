// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Tests/liveChatTest_spec.js'],


    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
  },



};