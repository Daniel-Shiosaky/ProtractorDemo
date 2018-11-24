var footer = function () {
    var Data = require('../DataProviders/Data.json');

    this.ClickConquestEvents = function () {
        var conquestEvents = browser.findElement(By.xpath(Data.locators.FooterData.conquestEventsLink));
        conquestEvents.click();
    };
    this.ClickConquestPhotos = function () {
        var conquestPhotos = browser.findElement(By.xpath(Data.locators.FooterData.conquestPhotosLink));
        conquestPhotos.click();
    };
    this.ClickConquestRegistration = function () {
        var conquestRegistration = browser.findElement(By.xpath(Data.locators.FooterData.conquestRegistrationLink));
        conquestRegistration.click();
    };
    this.ClickConquesScoring = function () {
        var conquesScoring = browser.findElement(By.xpath(Data.locators.FooterData.ConquesScoringLink));
        conquesScoring.click();
    };
    this.ClickConquestBand = function () {
        var conquestBand = browser.findElement(By.xpath(Data.locators.FooterData.conquestBandLink));
        conquestBand.click();
    };
    this.conquestApp = function () {
        var conquestApp = browser.findElement(By.xpath(Data.locators.FooterData.conquestAppLink));
        conquestApp.click();
    };
    this.ContactEmail = function () {
        var ContactEmailLink = browser.findElement(By.xpath(Data.locators.FooterData.contactEmailLink));
        ContactEmailLink.click();
    };
    this.ContactPhone = function () {
        var ContactPhone = browser.findElement(By.xpath(Data.locators.FooterData.contactPhone));
        ContactPhone.click();
    };
    this.skypeContact = function () {
        var skypeContactLink = browser.findElement(By.xpath(Data.locators.FooterData.skypeContactLink));
        skypeContact.click();
    };

};

module.exports= new footer();