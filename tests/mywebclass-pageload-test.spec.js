const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://db627.github.io/is218-project1/');
  
  const errors = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('div[role="alert"]')).map(el => el.innerText);
  });
  
  if (errors.length > 0) {
    console.error(`Page loaded with errors: ${errors.join('\n')}`);
  } else {
    console.log('Page loaded successfully without errors.');
  }
  
  await browser.close();
})();