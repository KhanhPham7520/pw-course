import { Page } from "@playwright/test";
import { BasePage } from "./base-page";


export class LoginPage extends BasePage {
    locatorUsername : string = "//input[@id='user_login']";
    locatorPassword : string = "//input[@id='user_pass']";
    locatorLoginButton : string = "//input[@id='wp-submit']";


    constructor(page : Page) {
        super(page);
    }

    async fillUsername(username : string) {
        await this.page.locator(this.locatorUsername).fill(username);
    }

    async fillPassword(password : string) {
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickOnLoginButton(){
        await this.page.locator(this.locatorLoginButton).click();
    }
}