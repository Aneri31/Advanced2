// commonutils.js

const { baseURL } = require('../Configuration/config');
const { searchBoxXPath, productImageXPath } = require('../Configuration/locators');

class CommonUtils {
    constructor(page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(baseURL);
    }

    async searchProduct(productName) {
        await this.navigateToHomePage();
        await this.page.fill(searchBoxXPath, productName);
        await this.page.press(searchBoxXPath, 'Enter');
        await this.page.waitForSelector(searchBoxXPath);
    }

    async addToCart() {
        try {
            console.log('Waiting for product image to be visible...');
            await this.page.waitForSelector(productImageXPath);
            console.log('Product image found, clicking...');
            await this.page.click(productImageXPath);
        } catch (error) {
            console.error('Error clicking product image');
            console.error(error);
            throw error;
        }
    }
}

module.exports = CommonUtils;
