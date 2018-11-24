var liveChat = function () {
    var Data = require('../DataProviders/Data.json');

    this.openChatWindow = function () {
        var openLiveChat = browser.findElement(By.xpath(Data.locators.LiveChatData.openLiveChatWindow));
        openLiveChat.click();
    };
    this.FillChatWindowForm = function () {
        var openLiveChat = browser.findElement(By.xpath(Data.locators.LiveChatData.openLiveChatWindow));
        openLiveChat.click();


        var chatUserName = browser.findElement(By.xpath(Data.locators.LiveChatData.EnterName));
        var chatUserEmail = browser.findElement(By.xpath(Data.locators.LiveChatData.EnterEmail));
        var chatQuestion = browser.findElement(By.xpath(Data.locators.LiveChatData.TypeQuestion));
        var startChatButton = browser.findElement(By.xpath(Data.locators.LiveChatData.StartChat));
        var closeChatWindow = browser.findElement(By.xpath(Data.locators.LiveChatData.CloseChatWindow));

        chatUserName.sendKeys(Data.locators.testdata.chatUserName);
        chatUserEmail.sendKeys(Data.locators.testdata.chatUserEmail);
        chatQuestion.sendKeys(Data.locators.testdata.chatEnterQuestion);
        startChatButton.click();
        closeChatWindow.click();
    };

};

module.exports= new liveChat();