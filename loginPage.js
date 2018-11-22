var loginPage = function () {


    this.goToLogin = function () {

        element(by.buttonText("LOGIN")).click();
        browser.sleep(3000)

    };

    this.enterUserName = function (userName) {
        element(by.name("email")).sendKeys(userName)
        browser.sleep(3000)
    };

    this.enterPassword = function (password) {
        element(by.name("password")).sendKeys(password)
        browser.sleep(3000)
    };

    this.goToSignUp =function () {
        element(by.buttonText("SIGN UP")).click();

    };
};

module.exports= new loginPage();