import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";
import CustomerServiceComponent from "../../models/components/global/footer/CustomerServiceComponent";
import MyAccountComponent from "../../models/components/global/footer/MyAccountComponent";
import FollowUsComponent from "../../models/components/global/footer/FollowUsComponent";

export default class FooterTestFlow {
  constructor(private page: Page) {
    this.page = page;
  }

  // Service method
  async verifyFooterComponent(): Promise<void> {
    await this.verifyInformationColumn();
    await this.verifyCustomerServiceColumn();
    await this.verifyMyAccountColumn();
    await this.verifyFollowUsColumn();
  }

  // Support methods
  private async verifyInformationColumn(): Promise<void> {
    const homePage: HomePage = new HomePage(this.page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    const informationColumnComp: InformationColumnComponent =
      footerComponent.informationColumnComponent();
    const titleInformationColumn = await informationColumnComp
      .title()
      .textContent();
    console.log(`Information Column Title: ${titleInformationColumn}`);
  }

  private async verifyCustomerServiceColumn(): Promise<void> {
    const homePage: HomePage = new HomePage(this.page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    const customerServiceComponent: CustomerServiceComponent =  footerComponent.customerServiceComponent();
    const titleCustomerService = await customerServiceComponent
      .title()
      .textContent();
    console.log(`title: ${titleCustomerService}`);
  }

  private async verifyMyAccountColumn(): Promise<void> {
    const homePage: HomePage = new HomePage(this.page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    const myAccountColumnComponent: MyAccountComponent = footerComponent.myAccountComponent();
    const titleMyAccount = await myAccountColumnComponent.title().textContent();
    console.log(`title: ${titleMyAccount}`);
  }

  private async verifyFollowUsColumn(): Promise<void> {
    const homePage: HomePage = new HomePage(this.page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    const followUsColumnComp: FollowUsComponent =
      footerComponent.followUsComponent();
    const titleFollowUs = await followUsColumnComp.title().textContent();
    console.log(`title: ${titleFollowUs}`);
  }
}
