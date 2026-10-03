import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.locator('[data-test="search-submit"]').click();
  await page.locator('[data-test="product-01M40XKY2D9CP8723EC6N2V82H"]').click();
  await expect(page.locator('[data-test="product-name"]')).toBeVisible();
});