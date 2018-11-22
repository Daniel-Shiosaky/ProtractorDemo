// conf.js
exports.config = {

    specs: ['../Tests/spec.js'],


    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().window().maximize();


  },

};