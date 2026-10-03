import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('test', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.goto();
  await homePage.searchProduct('Hammer');
  await homePage.openProduct('Hammer');

  await expect(productPage.productName).toBeVisible();
});