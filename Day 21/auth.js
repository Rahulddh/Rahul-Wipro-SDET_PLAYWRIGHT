// auth.js

const { chromium } = require('@playwright/test');

async function globalSetup() {

  // Launch browser
  const browser = await chromium.launch({
    headless: false
  });

  // Create context
  const context = await browser.newContext();

  // Open page
  const page = await context.newPage();

  // Open website
  await page.goto('https://www.jiomart.com/');

  // Click login icon
  await page.getByRole('link', { name: 'user icon' }).click();

  // Enter mobile number
  await page.getByTestId('JDSInput-input').fill('6202119134');

  // Click continue
  await page.getByTestId('JDSButton-container').click();

  console.log('Enter OTP manually...');

  // Wait for OTP
  await page.waitForTimeout(30000);

  // Save login state
  await context.storageState({
    path: 'auth.json'
  });

  console.log('Auth saved successfully');

  await browser.close();
}

globalSetup();