
import {test} from '@playwright/test';
import HomePage from "../models/pages/HomePage";
import InformationColumnComponent from '../models/components/global/footer/InformationColumnComponent';
import FooterComponent from '../models/components/global/footer/FooterComponent';
import CustomerServiceComponent from '../models/components/global/footer/CustomerServiceComponent';
import MyAccountComponent from '../models/components/global/footer/MyAccountComponent';
import FollowUsComponent from '../models/components/global/footer/FollowUsComponent';

test('Test Base Component in Page', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const foooterComponent: FooterComponent = homePage.footerComponent();
    const informationColumnComponent: InformationColumnComponent = foooterComponent.informationColumnComponent();
    const customerServiceComponent: CustomerServiceComponent = foooterComponent.customerServiceComponent();
    const myAccountComponent: MyAccountComponent = foooterComponent.myAccountComponent();
    const followUsComponent: FollowUsComponent = foooterComponent.followUsComponent();

    const informationColumnTitle = await informationColumnComponent.title().textContent();
    const customerServiceTitle = await customerServiceComponent.title().textContent();
    const myAccountTitle = await myAccountComponent.title().textContent();
    const followUsTitle = await followUsComponent.title().textContent();

    console.log(`Information Column Title: ${informationColumnTitle}`);
    console.log(`Customer Service Column Title: ${customerServiceTitle}`);
    console.log(`My Account Column Title: ${myAccountTitle}`);
    console.log(`Follow Us Column Title: ${followUsTitle}`);

    // DEBUG purpose only
    await page.waitForTimeout(2000);
})