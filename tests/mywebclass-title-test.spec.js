const { test, expect } = require('@playwright/test');

test('Page title is correct', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/index.html');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('MyWebClass: Revolutianized Teaching Solutions');
});