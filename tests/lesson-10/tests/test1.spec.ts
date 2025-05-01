import test, { expect } from "@playwright/test";
import { RegisterPage } from "../pages/register-page";
import { PomManager } from "../../lesson-12/some-pom-style/pom-manager";


test.describe("Lesson 10", async () => {

    test.beforeAll(async ({ page }) => {
        let registerPage : RegisterPage = PomManager.
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/");
    });


    test("Bài học 1 : Register Page", async ({ page }) => {

        await page.locator("//a[@href='01-xpath-register-page.html']").click();

    });


    test("Bài học 2 : Product Page", ({ page }) => {
        await page.locator("//")

    });


});