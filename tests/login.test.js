const { test, expect } = require('@playwright/test');

test('Login with valid credentials', { timeout: 60000 }, async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/login');
  
  // Wait for email input to be visible
  await page.waitForSelector('input[name="email"]', { visible: true });
  await page.fill('input[name="email"]', 'valid-email@example.com');
  
  // Wait for password input to be visible
  await page.waitForSelector('input[name="password"]', { visible: true });
  await page.fill('input[name="password"]', 'ValidPassword123');
  
  // Wait for the submit button to be visible and clickable
  await page.waitForSelector('button[type="submit"]', { visible: true });
  await page.click('button[type="submit"]');
  
  // Wait for profile to appear, ensuring login success
  await page.waitForSelector('text=Profile', { visible: true });
  await expect(page.locator('text=Profile')).toBeVisible();
});
