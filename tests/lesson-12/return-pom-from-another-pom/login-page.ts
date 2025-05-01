import { Page } from "@playwright/test";
import { DashboardPage } from "./dashboard-page";



export class Login {

    page: Page;
    xpathUsername: string;
    xpathPassword: string;
    xpathLoginBtn: string;

    constructor(page: Page) {
        this.page = page;
    }

    async login(userName: string, password: string) {
        await this.page.fill(this.xpathUsername, userName);
        await this.page.fill(this.xpathPassword, password);
        await this.page.click(this.xpathLoginBtn);

        return new DashboardPage(this.page);
    }

}