import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('test', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await homePage.searchProduct('Hammer');
  await homePage.openProduct('Hammer');
  await productPage.addToCart();
  await cartPage.openCart();

  await expect(cartPage.productTitle).toBeVisible();
});