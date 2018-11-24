var SearchBar = function () {
var searchButton = element(by.cssContainingText('SEARCH'));
var Data = require('../DataProviders/Data.json');
    this.SearchWithDefaults = function () {
        searchButton.click();
    };

    this.SelectAnyDate = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var anyDate = browser.findElement(By.xpath(Data.locators.SearchBarData.AnyDateMenuItem));
        anyDate.click();
        searchButton.click();
    };
    this.SelectToday = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var Today = browser.findElement(By.xpath(Data.locators.SearchBarData.TodayMenuItem));
        Today.click();
        searchButton.click();

    };

    this.SelectTomorrow = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var Tomorrow = browser.findElement(By.xpath(Data.locators.SearchBarData.TomorrowMenuItem));
        Tomorrow.click();
        searchButton.click();

    };

    this.SelectThisWeek = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var ThisWeek = browser.findElement(By.xpath(Data.locators.SearchBarData.ThisWeekMenuItem));
        ThisWeek.click();
        searchButton.click();

    };

    this.SelectThisWeekend = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var ThisWeekend = browser.findElement(By.xpath(Data.locators.SearchBarData.ThisWeekendMenuItem));
        ThisWeekend.click();
        searchButton.click();

    };

    this.SelectNextWeek = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var NextWeek = browser.findElement(By.xpath(Data.locators.SearchBarData.NextWeekMenuItem));
        NextWeek.click();
        searchButton.click();

    };

    this.SelectNextMonth = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        var NextMonth = browser.findElement(By.xpath(Data.locators.SearchBarData.NextMonthMenuItem));
        NextMonth.click();
        searchButton.click();

    };

    this.SelectCustomDate = function (customDate) {
        element(by.model('landingCtrl.selectedDate')).click();
        var CustomDate = browser.findElement(By.xpath(Data.locators.SearchBar.CustomDateInput));
        CustomDate.click();
        CustomDate.sendKeys(customDate)
        searchButton.click();

    };

    this.EnterLocation = function () {
        element(by.model('landingCtrl.selectedDate')).click();
        searchButton.click();

    };

    this.selectEvent = function () {

        searchButton.click();

    };





};

module.exports= new SearchBar();