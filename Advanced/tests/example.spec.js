// example.spec.js

const { test, chromium } = require('@playwright/test');
const { baseURL } = require('../Configuration/config');
const CommonUtils = require('./commonutils');

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
        await amazonTests.searchProduct('iPhone 14'); // Correct method name to lowercase
    });

});

class AmazonTests extends CommonUtils {
    constructor(page) {
        super(page);
    }
}
