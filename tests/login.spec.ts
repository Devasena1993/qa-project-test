import { expect, test } from '@Playwright/test';
import { LoginPage } from '../pages/loginpage';

test.describe('SauceDemo login', () => {
  test('logs in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });
});