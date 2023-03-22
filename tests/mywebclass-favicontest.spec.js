const { test, expect } = require('@playwright/test');

test('Favicon is displayed correctly', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/');
  
  const faviconUrl = await page.$eval('link[rel="icon"]', el => el.href);
  
  // Wait for the navigation to the favicon URL to complete before using waitForResponse()
  await Promise.all([
    page.waitForNavigation(),
    page.goto(faviconUrl)
  ]);
  
  const faviconResponse = await page.waitForResponse(response => response.url() === faviconUrl);
  
  expect(faviconResponse.ok()).toBeTruthy();
});
