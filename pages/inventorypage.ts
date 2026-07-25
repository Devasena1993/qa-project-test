import { Page } from '@Playwright/test';
export class InventoryPage {
    constructor(private page: Page){}
    async addBackpackToCart(){
        await this.page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();
    }
    cartBadge(){
        return this.page.locator('.shopping_cart_badge');
    }
}




