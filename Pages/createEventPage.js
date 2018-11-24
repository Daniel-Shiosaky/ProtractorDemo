var CreateEvent = function () {


    this.goToCrateEventPage = function () {

        browser.findElement(By.xpath("//button[@type='button']//span[contains(text(),'CREATE EVENT')]")).click();
        browser.sleep(3000)
        var popuptitle =  browser.findElement(By.xpath("//h3[@class='text-center' and contains(text(),'Send Your Event')]"));
        expect(popuptitle.getText()).toEqual("Send Your Event");

    };

    this.enterName = function (orgFirstName) {
        element(by.name("organizerFirstName")).sendKeys(orgFirstName)
        browser.sleep(3000)
    };

    this.enterLastName = function (orgLastName) {
        element(by.name("organizerLastName")).sendKeys(orgLastName)
        browser.sleep(3000)
    };

    this.enterEmail =function (orgEmail) {
        element(by.name("organizerEmail")).sendKeys(orgEmail)
        browser.sleep(3000)

    };

    this.EventStartDate =function (startDate) {
        browser.findElement(By.xpath("//md-dialog[@role='dialog']/md-dialog-content[@class='md-dialog-content']/form[@name='sendYourEventCtrl.eventRequestForm']/fieldset[2]/div[2]/date-and-time[@name='Start Date']/fieldset/div/md-input-container/md-datepicker[@name='date']//input[@class='md-datepicker-input md-input']")).sendKeys(startDate)
        browser.sleep(3000)

    };
};

module.exports= new CreateEvent();