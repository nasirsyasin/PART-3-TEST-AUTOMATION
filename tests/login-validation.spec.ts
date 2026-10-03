import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goto();
  await loginPage.open();
  await loginPage.login('invalid123@gmail.com', 'WrongPassword123!');

  await expect(loginPage.invalidCredentialsMessage).toBeVisible();
});