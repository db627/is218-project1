import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test button test mobile', async ({ page }) => {
  await page.goto('https://db627.github.io/is218-project1/');
  await page.getByRole('link', { name: 'Start Here' }).click();
  await page.getByRole('link', { name: 'Section 1' }).click();
  await page.getByRole('link', { name: 'MyWebClass' }).click();
  await page.getByRole('link', { name: 'Read More' }).first().click();
  await page.getByRole('link', { name: 'MyWebClass' }).click();
  await page.getByRole('link', { name: 'Read More' }).nth(1).click();
});