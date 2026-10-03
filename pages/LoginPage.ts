import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  get invalidCredentialsMessage(): Locator {
    return this.page.getByText('Invalid email or password');
  }

  async open(): Promise<void> {
    await this.page.locator('[data-test="nav-sign-in"]').click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-submit"]').click();
  }
}