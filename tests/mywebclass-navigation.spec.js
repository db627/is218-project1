import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/');
  await page.getByRole('link', { name: 'MyWebClass', exact: true }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Article', exact: true }).click();
});