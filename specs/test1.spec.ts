import { test, expect } from '@playwright/test';

test('test 1 - example', async ({ browser }) => {
  const context = await browser.newContext(); // Create a new context
  const page = await context.newPage(); // Open a new page within this context

  await page.goto('https://www.example.com');
  await expect(page).toHaveTitle(/Example Domain/);

  await context.close(); // Ensure the context is closed after the test
});
