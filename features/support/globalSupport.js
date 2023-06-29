const { setDefaultTimeout, BeforeAll, AfterAll, Before, After } = require ('@cucumber/cucumber')
const { chromium } = require ('@playwright/test');


setDefaultTimeout(60 * 10000);

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false
    });
});

AfterAll(async () => {
    await global.browser.close();
});

Before(async () => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

After(async () => {
    await global.page.close();
});