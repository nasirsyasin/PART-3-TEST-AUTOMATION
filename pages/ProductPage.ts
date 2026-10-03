import type { Locator, Page } from '@playwright/test';

export class ProductPage {
  constructor(private readonly page: Page) {}

  get productName(): Locator {
    return this.page.locator('[data-test="product-name"]');
  }

  async addToCart(): Promise<void> {
    await this.page.locator('[data-test="add-to-cart"]').click();
  }
}