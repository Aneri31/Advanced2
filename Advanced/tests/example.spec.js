const { test, chromium } = require('@playwright/test');
const { baseURL } = require('../Configuration/config');
const CommonUtils = require('./commonutils');

class AmazonTests extends CommonUtils {
    constructor(page) {
        super(page);
    }

    async searchProduct(productName) {
        // Implementation for searching the product
        await this.page.goto(baseURL);
        await this.page.fill('input[name="field-keywords"]', productName);
        await this.page.click('input[type="submit"]');
        // Add any other necessary steps for searching the product
    }
}

test.describe('Amazon Product Tests', () => {
    let browser;
    let page;
    let amazonTests;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        amazonTests = new AmazonTests(page);
    });

    test.afterEach(async () => {
        // Close the page after each test
        await page.close();
    });

    test.afterAll(async () => {
        // Close the browser after all tests
        await browser.close();
    });

    test('Login and Search Product', async () => {
        await amazonTests.searchProduct('iPhone 14'); // Ensure method is correctly called
    });
    
    test('Product', async () => {
        await console.log("this is demo")
});

