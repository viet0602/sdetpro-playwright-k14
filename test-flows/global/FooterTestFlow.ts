import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import CustomerServiceComponent from "../../models/components/global/footer/CustomerServiceComponent";
import MyAccountComponent from "../../models/components/global/footer/MyAccountComponent";
import FollowUsComponent from "../../models/components/global/footer/FollowUsComponent";
import FooterColumnComponent from "../../models/components/global/footer/FooterColumnComponent";
import {deepStrictEqual} from 'assert';


export default class FooterTestFlow {
  constructor(private page: Page) {
    this.page = page;
  }

  // Service method
  async verifyFooterComponent(): Promise<void> {
    const homePage: HomePage = new HomePage(this.page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    await this.verifyInformationColumn(footerComponent);
    await this.verifyCustomerServiceColumn(footerComponent);
    await this.verifyMyAccountColumn(footerComponent);
    await this.verifyFollowUsColumn(footerComponent);
  }

  // Support methods
  private async verifyInformationColumn(footerComponent:FooterComponent): Promise<void> {
    const expectedLinkTexts = ['Sitemap','Shipping & Returns','Privacy Notice','Conditions of Use','About us','Contact us'];
    const expectedHrefs = ['/sitemap','/shipping-returns','/privacy-policy','/conditions-of-use','/about-us','/contactus'];
      const informationColumnComponent = footerComponent.informationColumnComponent();
      await this.verifyFooterColumn(informationColumnComponent, expectedLinkTexts, expectedHrefs);
  }

  private async verifyCustomerServiceColumn(footerComponent:FooterComponent): Promise<void> {
    const expectedLinkTexts = ['Search','News','Blog','Recently viewed products','Compare products list','New products'];
    const expectedHrefs = ['/search','/news','/blog','/recentlyviewedproducts','/compareproducts','/newproducts'];
    const customerServiceComponent = footerComponent.customerServiceComponent();
    await this.verifyFooterColumn(customerServiceComponent, expectedLinkTexts, expectedHrefs);
  }

  private async verifyMyAccountColumn(footerComponent:FooterComponent): Promise<void> {
    const expectedLinkTexts = ['My account','Orders','Addresses','Shopping cart','Wishlist'];
    const expectedHrefs = ['/customer/info','/customer/orders','/customer/addresses','/cart','/wishlist'];
    const myAccountColumnComponent = footerComponent.myAccountComponent();
    await this.verifyFooterColumn(myAccountColumnComponent, expectedLinkTexts, expectedHrefs);
  }

  private async verifyFollowUsColumn(footerComponent:FooterComponent): Promise<void> {
    const expectedLinkTexts = ['Facebook','Twitter','RSS','YouTube',"Google+"];
    const expectedHrefs = ['http://www.facebook.com/nopCommerce',
    'https://twitter.com/nopCommerce','/news/rss/1','http://www.youtube.com/user/nopCommerce','https://plus.google.com/+nopcommerce'];
    const followUsColumnComponent = footerComponent.followUsComponent();
    await this.verifyFooterColumn(followUsColumnComponent, expectedLinkTexts, expectedHrefs);
    
  }

  private async verifyFooterColumn(
    footerColumnComponent: FooterColumnComponent,
    expectedLinkTexts: string[],
    expectedHrefs: string[]
  ): Promise<void> {
    const actualdLinkTexts: string[] = [];
    const actualHrefs: string[] = [];

    const footerCompLinks = await footerColumnComponent.links(); // Lấy ra toàn bộ links của footer
    // Lấy ra lần lượt các link
    for(let footerComplink of footerCompLinks){
      const footerLinkText = await footerComplink.textContent();
      const footerLinkHref = await footerComplink.getAttribute("href");
      actualdLinkTexts.push(footerLinkText);
      actualHrefs.push(footerLinkHref);
    }
    deepStrictEqual(actualdLinkTexts, expectedLinkTexts, `Actual link texts does not match expected link texts. Actual: ${actualdLinkTexts}, Expected: ${expectedLinkTexts}`);
    deepStrictEqual(actualHrefs, expectedHrefs, `Actual hrefs does not match expected hrefs. Actual: ${actualHrefs}, Expected: ${expectedHrefs}`);
    }
  
}
