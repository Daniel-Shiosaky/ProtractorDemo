// spec.js
var login =require('../Pages/loginPage.js');
var base =require('../Pages/BasePage.js');
var Data = require('../DataProviders/Data.json');


describe('navigate to Login page and enter credentials', function() {
    it('should go to login page en enter credentials', function() {

        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        login.goToLogin();
        login.enterUserName(Data.locators.testdata.Username);
        login.enterPassword(Data.locators.testdata.PassWord);


    });

});