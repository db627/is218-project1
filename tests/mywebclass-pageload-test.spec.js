const { test, expect } = require('@playwright/test');

test('Page loads without errors', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/');
  
  const errors = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('div[role="alert"]')).map(el => el.innerText);
  });
  
  expect(errors.length).toBe(0);
});