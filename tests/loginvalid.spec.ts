import { test, expect } from '@Playwright/test';
import { LoginPage } from '../pages/loginpage';
import { InventoryPage } from '../pages/inventorypage';
import { CartPage } from '../pages/cartpage';

test('Full Inventory cart flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge()).toHaveText('1');
  await page.locator('.shopping_cart_link').click();

  expect(await cartPage.cartItemCount()).toBe(1);
  await cartPage.removeProductFromCart('Sauce Labs Backpack');
  expect(await cartPage.cartItemCount()).toBe(0);

  await cartPage.clickCheckout();
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});