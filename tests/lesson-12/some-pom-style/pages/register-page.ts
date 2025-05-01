import { Page } from "@playwright/test";


export class RegisterPage {
  
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    goToRegisterPage() {
    }

}