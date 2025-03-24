import test, { expect } from "@playwright/test";

test.describe("AUTH - Authentication",  () => {

    let userNameOrEmailAddressTxtbox : string;
    let passwordTxtbox : string;
    let loginBtn : string;
    let dashboardTitleText : string;
    let rightNowHeaderXpath : string;
    let dashboardActivityHeaderXpath : string;

    let currentUrl;

    let invalidCredentials : {
        userNameOrEmailAddress : string;
        password : string;
    }

    let validCredentials : {
        userNameOrEmailAddress : string;
        password : string;
    }

    test.beforeAll("Before All", () => {
        userNameOrEmailAddressTxtbox = "//input[@id='user_login']";
        passwordTxtbox = "//input[@id='user_pass']";
        loginBtn = "//input[@id='wp-submit']";
        dashboardTitleText = "//h1[text()='Dashboard']";
        rightNowHeaderXpath = "//div[@id='dashboard_right_now']//child::h2";
        dashboardActivityHeaderXpath = "//div[@id='dashboard_activity']//child::h2";

        invalidCredentials = {
            userNameOrEmailAddress : "k12-kanh",
            password : "Testing1234"
        };

        validCredentials = {
            userNameOrEmailAddress : "k12-anh",
            password : "Fmjt^sg2e#WdNFBWmlcVLhi%"
        }
    });


    test.beforeEach("Before Each", async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });

    test.afterAll("After all", async () => {
        
    })

    test.afterEach("After Each", () => {
        
    })

    // login fail
    test("@AUTH_001 - Login fail", async ({page}) => {
        await test.step("Nhập vào thông tin username, password bị sai", async () => {
            await page.locator(userNameOrEmailAddressTxtbox).fill(invalidCredentials.userNameOrEmailAddress);
            await page.locator(passwordTxtbox).fill(invalidCredentials.password);
        });

        await test.step("Click button login", async () => {
            await page.locator(loginBtn).click();
            // Write expect
        });
    })



    // login success
    test("@AUTH_002 - Login success", async ({page}) => {
        await test.step("Nhập vào thông tin username, password đúng", async () => {
            await page.locator(userNameOrEmailAddressTxtbox).fill(validCredentials.userNameOrEmailAddress);
            await page.locator(passwordTxtbox).fill(validCredentials.password);
        });

        await test.step("Click button login", async () => {
            await page.locator(loginBtn).click();

            currentUrl = await page.url();
            
            const actualDashboardTitle = await page.locator(dashboardTitleText).textContent();
            const actualRightNowHeader = await page.locator(rightNowHeaderXpath).textContent();
            const actualDashboardActivityHeader = await page.locator(dashboardActivityHeaderXpath).textContent();
            
            // Chuyển tới trang có url là /wp-admin
            await expect(currentUrl).toEqual("https://pw-practice-dev.playwrightvn.com/wp-admin/");

            // Có heading h1 "Dashboard" hiển thị
            await expect(actualDashboardTitle).toEqual("Dashboard")
            
            // Có 2 heading h2 là "At a Glance" và "Activity" hiển thị
            await expect(actualRightNowHeader).toEqual("At a Glance");
            await expect(actualDashboardActivityHeader).toEqual("Activity");

        });
    })
});

