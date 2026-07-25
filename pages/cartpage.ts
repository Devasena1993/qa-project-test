import { Page } from '@Playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async removeProductFromCart(productName: string) {
    await this.page
      .locator('.cart_item', { hasText: productName })
      .locator('button:has-text("Remove")')
      .click();
  }

  async cartItemCount() {
    return this.page.locator('.cart_item').count();
  }
}