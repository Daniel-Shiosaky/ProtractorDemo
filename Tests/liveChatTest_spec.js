var base =require('../Pages/BasePage.js');
var Data = require('../DataProviders/Data.json');
var liveChat=require('../Pages/liveChat.js');
var driver = browser.driver;

describe('check live chat functionality', function() {

    it('Open live chat window  ', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
       liveChat.openChatWindow();


    });
    /*it('Fill in the Required data for the chat  ', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        liveChat.openChatWindow();
        browser.switchTo().frame(driver.findElement(By.xpath(Data.locators.LiveChatData.chatiframe)));
        liveChat.FillChatWindowForm();


    });
*/




});