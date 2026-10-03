import type { Locator, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  get productTitle(): Locator {
    return this.page.locator('[data-test="product-title"]');
  }

  async openCart(): Promise<void> {
    await this.page.locator('[data-test="nav-cart"]').click();
  }
}