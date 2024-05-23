import {test} from '@playwright/test';
import HomePage from "../models/pages/HomePage";
import ProductItemComponent from "../models/components/ProductItemComponent";
import PageBodyComponent from '../models/components/PageBodyComponent';

test('Test List of Component in Page', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const pageBodyComponent: PageBodyComponent = await homePage.pageBodyComponent();
    const productItemCompList: ProductItemComponent[] = await pageBodyComponent.productItemComponentList();
    
    for (let productItemComponent of productItemCompList) {
        const productTitle = await productItemComponent.productTitle().textContent();
        const productPrice = await productItemComponent.productPrice().textContent();
        console.log(`${productTitle.trim()}: ${productPrice.trim()}`);
    }

    // DEBUG purpose only
    await page.waitForTimeout(1000);
})