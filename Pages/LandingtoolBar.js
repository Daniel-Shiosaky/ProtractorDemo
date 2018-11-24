var LandingToolBar = function () {
    var Data = require('../DataProviders/Data.json');
    this.expansidePannel = function () {

        browser.findElement(By.className(Data.locators.TollbarData.sidePanelButton)).click();
        var fitnessMenuItem =  browser.findElement(By.xpath(Data.locators.TollbarData.fitnessMenuItem));
        expect(fitnessMenuItem.getText()).toEqual('FITNESS');

    };


    this.goToMasterEvents = function () {
        var RacesMenuItem =  browser.findElement(By.xpath(Data.locators.TollbarData.RacesMenuItem));
        expect(RacesMenuItem.getText()).toEqual('RACES');

        RacesMenuItem.click();


    };

    this.goToFaq = function () {

        var FAQMenuItem =  browser.findElement(By.xpath(Data.locators.TollbarData.FAQMenuItem));
        expect(FAQMenuItem.getText()).toEqual('FAQ');


        FAQMenuItem.click();

    };



};

module.exports= new LandingToolBar();