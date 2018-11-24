var base =require('../Pages/BasePage.js');
var Data = require('../DataProviders/Data.json');
var search=require('../Pages/searchBar.js');


describe('Create event form', function() {

    it('click search button with default values ', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        search.SearchWithDefaults();


    });

    it('searchAnyDate', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);
        search.SelectAnyDate();

    });
    it('searchCustomDate', function () {
        base.navigateToUrl(Data.testsiteurl);
        browser.waitForAngularEnabled(false);

        search.SelectCustomDate(Data.locators.testdata.searchCustomDate);



    });

});