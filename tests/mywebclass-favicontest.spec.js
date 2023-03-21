const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://db627.github.io/is218-project1/');
  
  const faviconUrl = await page.$eval('link[rel="icon"]', el => el.href);
  
  await page.goto(faviconUrl);
  
  const faviconResponse = await page.waitForResponse(response => response.url() === faviconUrl);
  
  if (faviconResponse.ok()) {
    console.log('Favicon displayed correctly.');
  } else {
    console.error(`Favicon did not display correctly. Status code: ${faviconResponse.status()}`);
  }
  
  await browser.close();
})();