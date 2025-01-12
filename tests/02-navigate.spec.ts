import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("Basic action", async ({ page }) =>{

    await page.goto("https://material.playwrightvn.com/");
    
    await page.goto("https://phptravels.com/demo/");

});

test("Basic click action", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");

    //single click
    await page.locator("//div[@id='clickArea']").click();

    // double click
    await page.locator("//div[@id='clickArea']").dblclick();

    // right click
    // await page.locator("//div[@id='clickArea']").click({
    //     button : "right"
    // });

    //phim khác
    await page.locator("//div[@id='clickArea']").click({
        modifiers : ["Shift","ControlOrMeta"]
    });
});

test("Basic input", async({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    //await page.locator("//input[@id='username']").fill("udemy@gmail.com");
    await page.locator("//input[@id='username']").pressSequentially("udemy@gmail.com",{
        delay : 100 // gõ mỗi kí tự sau đó điền 100 giây r gõ tiếp
    });

});
