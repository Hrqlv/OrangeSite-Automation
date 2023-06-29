const { test, expect } = require("@playwright/test");
const { Given, When, Then, And } = require("@cucumber/cucumber");

const DataOrange = require("../DataDriven/Orange.json");

Given("Put your data and click on PIM", async function () {
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');
  await page.click('a[href="/web/index.php/pim/viewPimModule"]');
});

When("Click on add an user", async function () {
  await page.click(
    'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
  );
});

Then("Put data for add user", async function () {
  await page.fill('input[name="firstName"]', DataOrange.name);
  await page.fill('input[name="middleName"]', DataOrange.middleName);
  await page.fill('input[name="lastName"]', DataOrange.lastName);
  await page.click('button[type="submit"]');
});

Then("Add personal details", async function () {
  await page.fill(
    'input[class="oxd-input oxd-input--active"]',
    DataOrange.nickName
  );
  await page.fill('input[class="oxd-input oxd-input--active"]', DataOrange.id);
  await page.fill(
    'input[class="oxd-input oxd-input--active"]',
    DataOrange.number
  );
  await page.fill(
    'input[class="oxd-input oxd-input--active"]',
    DataOrange.data
  );
  await page.fill(
    'input[class="oxd-input oxd-input--active"]',
    DataOrange.SSNnumber
  );
  await page.fill(
    'input[class="oxd-input oxd-input--active"]',
    DataOrange.SINnumber
  );
  await page.click('div[class="oxd-select-text oxd-select-text--active"]');
  await page.click("div[data-v-67d2aedf]");
  await page.click('div[class="oxd-select-text oxd-select-text--active"]');
  await page.click("div[data-v-67d2aedf]");
  await page.fill('input[placeholder="yyyy-mm-dd"]', DataOrange.dataBirth);
  await page.click("span[data-v-7ef819fd]");
  await page.click('div[class="oxd-select-text oxd-select-text--active"]');
  await page.click("div[data-v-67d2aedf]");
  await page.click('button[type="submit"]');
});

Then("Add employee", async function () {
  await page.click('a[href="/web/index.php/pim/viewPimModule"]');
  await page.click('li[class="oxd-topbar-body-nav-tab"]');
  await page.fill('input[name="firstName"]', DataOrange.name);
  await page.fill('input[name="middleName"]', DataOrange.middleName);
  await page.fill('input[name="lastName"]', DataOrange.lastName);
  await page.click("button[data-v-10d463b7]");
});

Then("Add an user", async function () {
  await page.click('a[href="/web/index.php/admin/viewAdminModule"]');
  await page.click('button[class="oxd-button oxd-button--medium oxd-button--secondary"]');
  await page.click('div[class="oxd-select-text oxd-select-text--active"]');
  await page.fill('input[placeholder="Type for hints..."]',DataOrange.TypeForHints);
  await page.click("div[data-v-67d2aedf]");
  await page.click('div[class="oxd-select-text-input"]');
  await page.fill("input[data-v-1f99f73c]", DataOrange.nickName2);
  await page.fill('input[type="password"]', DataOrange.password);
  await page.fill('input[type="password"]', DataOrange.password);
});
