// spec.js
var login =require('../Pages/loginPage.js');
var base =require('../Pages/BasePage.js');
var Data = require('../DataProviders/Data.json');
var sideBar= require('..//Pages/LandingtoolBar.js');
var eventform=require('../Pages/createEventPage.js');


describe('Toolbar Navigation', function() {

    it('open the side bar', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        sideBar.expansidePannel();

    });

    it('checks that Races menu item is present and click it', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        sideBar.expansidePannel();
        sideBar.goToMasterEvents();

    });
    it('checks that FAQ menu item is present and click it', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        sideBar.expansidePannel();
        sideBar.goToFaq();
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });

    });
    it('should go to login page and enter credentials', function() {

        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        login.goToLogin();
        login.enterUserName(Data.locators.testdata.Username);
        login.enterPassword(Data.locators.testdata.PassWord);
        login.goToSignUp();


    });
    it('open the Create event form', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        eventform.goToCrateEventPage();

        });

    it('Fill the Create event form', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);


    });

});