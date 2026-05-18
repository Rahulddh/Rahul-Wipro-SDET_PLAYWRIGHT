//import { test, expect } from '@playwright/test';

// test('amazon razor products check', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   const txtBox = page.locator('#twotabsearchtextbox');
//   await txtBox.fill("gaming");
//   const subBtn = page.locator('#nav-search-submit-button');
//   await subBtn.click();

  
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('gaming pc');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.getByRole('link', { name: 'Sponsored Ad - STGAubron Gaming PC Desktop, Intel Core i7 up to 3.9G, Radeon RX' }).click();
  await page.goto('https://www.amazon.com/STGAubron-Gaming-Desktop-Radeon-Windows/dp/B0G1Z493YN/ref=sr_1_1_sspa?crid=228A281KPEIM5&dib=eyJ2IjoiMSJ9.Vk6DuJRMFr0oAFle4J8sa5pnz58cDMoZtGAgMAwvvgaObe0zvx7aQ_s7hBSb7cQZbcLzji00iw7hZvPjQ4lzZMFkQrx9Itc-2xO2TQpUwCoLp57_Yd5_uf6sWuRAjBm9W-06NeSE0WFLZmci3E23m-fLkFpx7IUFZO1lyzNVPQqM2mqvHj5RgZM89URKN_RgOx-pVDJhpTMrEcyva7FLOEW0STygq83f3cyw4AiMA54.A-rRI_bJWtC6p8HPGpatbPH8sOZ6zRvs1v6um3zdWRw&dib_tag=se&keywords=gaming%2Bpc&qid=1779085329&sprefix=gaming%2Bp%2Caps%2C438&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
});