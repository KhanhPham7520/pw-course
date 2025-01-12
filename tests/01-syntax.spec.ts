import { test, expect } from '@playwright/test';


test.describe('Example Test Suite', () => {
    test('Example Test Case', async ({ page }) => {
        await test.step('Navigate to example.com', async () => {
            await page.goto('https://example.com');
        });

        await test.step('Check page title', async () => {
            const title = await page.title();
            expect(title).toBe('Example Domain');
        });
    });
});