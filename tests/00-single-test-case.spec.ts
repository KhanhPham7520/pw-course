import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test.describe('Sytner Test Suite', () => {

test("1. Verify user can go to Sytner Home Page without any errors", async ({page})=>{
    await test.step('Navigate to Sytner Home Page', async () => {
        await page.goto("https://www.sytner.co.uk/");
    });

    await test.step("Click on Accept All Cookies", async () => {
      await page.locator("//button[@id='onetrust-accept-btn-handler']").click();
    });
});

test("Verify title should display correctly", async ({page}) => {
    await test.step("Verify page title", async() => {
        const pageTitle = await page.title();
        expect(pageTitle).toBe('Sytner Group: UK Prestige Car Dealerships');
    })
});



});