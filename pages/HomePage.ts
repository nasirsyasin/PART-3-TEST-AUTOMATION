import type { Page } from '@playwright/test';

const BASE_URL = 'https://practicesoftwaretesting.com/';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(BASE_URL);
  }

  async searchProduct(productName: string): Promise<void> {
    await this.page.locator('[data-test="search-query"]').fill(productName);
    await this.page.locator('[data-test="search-submit"]').click();
  }

  async openProduct(productName: string): Promise<void> {
    const escapedName = productName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const productNameLocator = this.page
      .locator('[data-test="product-name"]')
      .filter({ hasText: new RegExp(`^\\s*${escapedName}\\s*$`) });

    await productNameLocator.click();
  }
}