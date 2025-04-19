import test, { expect } from "@playwright/test";

test.describe("Authentication", () => {


    test.beforeAll(() => {
        console.log("Before All nè");

    });

    test.beforeEach(async ({ page }) => {
        console.log("Before each nè")
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });

    test("@AUTH_001 Login fail", async ({ page }) => {

        // 1. Nhập thông tin username và password
        await test.step("1. Nhập username và password bị sai", async () => {
            await page.locator("//input[@id='user_login']").fill("k12");

            // lấy ra giá trị vừa nhập vào ô textbox
            const actualUsername = await page.locator("//input[@id='user_login']").inputValue();

            await expect(actualUsername).toEqual("k12");
        });

        // 2. Click button login
        await test.step("2. Click button Login", async () => {
            // hiển thị lỗi trên màn hình
            await page.locator("//input[@id='wp-submit']").click();
        });
    });

    test("@AUTH_002 Login pass", async ({ page }) => {

        await test.step("1. Nhập username hợp lệ", async () => {
            await page.locator("//input[@id='user_login']").fill("k12-anh");
        })

        await test.step("2. Nhập password hợp lệ", async () => {
            await page.locator("//input[@id='user_pass']").fill("Fmjt^sg2e#WdNFBWmlcVLhi%");
        })


        await test.step("3. Click Login", async () => {
            await page.locator("//input[@id='wp-submit']").click();

            await expect(page.locator("//div[@id='screen-meta-links']")).toBeVisible();
        });

    });


    test.afterEach(() => {
        console.log("After Each nè");

    });

    test.afterAll(() => {
        console.log("After All nè");

    });


});
