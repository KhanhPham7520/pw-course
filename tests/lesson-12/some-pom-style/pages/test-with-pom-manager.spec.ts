import { test } from "@playwright/test";
import { expect } from "@playwright/test";
import { RegisterPage } from "./register-page";
import { PomManager } from "../pom-manager";
import { LoginPage } from "../../../lesson-10/login-page";


let userCredential = {
    userName: "k12-mentor",
    password: "Fmjt^sg2e#WdNFBWmlcVLhi%",
};

let url = "https://pw-practice-dev.playwrightvn.com/wp-login.php";
let pomManager: PomManager;
let registerPage: RegisterPage;
let loginPage: LoginPage;

test("Exercise 1 : Register Page", async ({ page }) => {
    pomManager = new PomManager(page);
    registerPage = pomManager.getRegisterPage();

    await test.step("1.Navigate to base url", async () => {
        await registerPage.goToRegisterPage();
    });
});