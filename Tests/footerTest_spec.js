var base =require('../Pages/BasePage.js');
var Data = require('../DataProviders/Data.json');
var footer=require('../Pages/footer.js');


describe('check footer functionality', function() {

    it('click Conquest Events link  ', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        footer.ClickConquestEvents();


    });




});