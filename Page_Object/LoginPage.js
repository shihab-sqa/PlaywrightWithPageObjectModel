const { expect } = require("@playwright/test");

class LoginPage {

constructor(page){

    this.page=page;

    this.username=page.locator("#username");
    
    this.password=page.locator("#password");
    this.submit=page.locator("#submit");
    this.success=page.locator(".post-title");
    this.fail=page.locator("#error");


}


async url(){


    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    
    }

async Login(user,pass){

 await this.username.fill(user);
 await this.password.fill(pass);
 await this.submit.click();


}



}

module.exports = {LoginPage};