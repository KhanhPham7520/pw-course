import { LoginPage } from "../../lesson-10/login-page";
import { DashboardPage } from "./dashboard-page";
import { test } from '@playwright/test';


let userCredential = {
    userName: "k12-mentor",
    password: "Fmjt^sg2e#WdNFBWmlcVLhi%",
};


test("@AUTH_001 - Login fail", async ({ page }) => {

    let loginPage: LoginPage = new LoginPage(page);

    //const dashboardPage : DashboardPage = loginPage.login();

    //dashboardPage.clickPostMenu();
});
