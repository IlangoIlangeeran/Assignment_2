const { test, expect } = require('@playwright/test');

test('Search for articles', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://onlinelibrary.wiley.com');
  
  // Enter search term in the search bar
  await page.fill('input[name="q"]', 'AI in healthcare');
  
  // Click the search button
  await page.click('button[type="submit"]');
  
  // Verify that search results are displayed
  const results = await page.locator('.search-results');
  await expect(results).toContainText('AI in healthcare');
});
