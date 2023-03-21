const { test, expect } = require('@playwright/test');

test('Page title is correct', async ({ page }) => {
  await page.goto('https://localhost:5500');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('MyWebClass: Revolutianized Teaching Solutions');
});