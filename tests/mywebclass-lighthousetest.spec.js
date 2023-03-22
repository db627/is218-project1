import { test, expect } from '@playwright/test';

test('generate lighthouse report and save screenshot', async ({ page }) => {
  await page.goto('https://developers.google.com/web/tools/lighthouse');
  await page.waitForSelector('#lighthouse-app');

  // Fill in the URL and click the "Generate report" button
  await page.fill('#url', 'https://db627.github.io/is218-project1/');
  await page.click('#generate-report');

  // Wait for the report to be generated and take a screenshot
  await page.waitForSelector('#lh-root', { state: 'attached' });
  const screenshot = await page.screenshot();

  // Save the screenshot as a file
  const fs = require('fs');
  fs.writeFileSync('lighthouse-report.png', screenshot);
  
  // Assert that the screenshot file was created
  expect(fs.existsSync('lighthouse-report.png')).toBeTruthy();
});