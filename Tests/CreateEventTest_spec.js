var base =require('../Pages/BasePage.js');
var Data = require('../DataProviders/Data.json');
var eventform=require('../Pages/createEventPage.js');


describe('Create event form', function() {

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