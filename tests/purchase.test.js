const { test, expect } = require('@playwright/test');

test('Purchase a subscription', async ({ page }) => {
  // Navigate to the subscription page
  await page.goto('https://onlinelibrary.wiley.com/subscribe');
  
  // Select a subscription plan
  await page.click('button#basic-plan');
  
  // Proceed to checkout
  await page.click('button#checkout');
  
  // Fill in payment details (mocked example)
  await page.fill('input[name="card-number"]', '4111111111111111');
  await page.fill('input[name="expiry-date"]', '12/25');
  await page.fill('input[name="cvv"]', '123');
  
  // Complete the purchase
  await page.click('button[type="submit"]');
  
  // Verify successful subscription by checking the confirmation message
  await expect(page.locator('text=Subscription confirmed')).toBeVisible();
});
