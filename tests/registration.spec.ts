import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="register-link"]').click();
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill('Nasir Shahzad');
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill('Yasin');
  await page.locator('[data-test="dob"]').click();
  await page.locator('[data-test="dob"]').fill('1995-01-02');
  await page.locator('[data-test="country"]').selectOption('AD');
  await page.locator('[data-test="postal_code"]').click();
  await page.locator('[data-test="postal_code"]').fill('1234');
  await page.locator('[data-test="house_number"]').click();
  await page.locator('[data-test="house_number"]').fill('23');
  await page.locator('[data-test="phone"]').click();
  await page.locator('[data-test="phone"]').fill('3314688181');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('nsywattoo@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('P@ss1234!122W');
  await page.locator('[data-test="register-submit"]').click();
});