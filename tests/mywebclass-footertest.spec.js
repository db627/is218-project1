import { test, expect } from '@playwright/test';

test('test footer works on web', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/');
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
});