import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test Footer works on mobile', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/');
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
});