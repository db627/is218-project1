const { chromium } = require('playwright');

describe('Navbar Display Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://db627.github.io/is218-project1/');
  });

  afterEach(async () => {
    await page.close();
  });

  it('checks if the navbar displays correctly', async () => {
    const navbar = await page.$('.navbar');
    expect(navbar).toBeTruthy();

    const brand = await navbar.$('.navbar-brand');
    expect(brand).toBeTruthy();

    const navbarItems = await navbar.$$('.navbar-item');
    expect(navbarItems.length).toBeGreaterThan(0);

    // Add more assertions based on your specific navbar design
  });
});
