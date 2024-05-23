import { Locator } from "@playwright/test";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomerServiceComponent from "./CustomerServiceComponent";
import MyAccountComponent from "./MyAccountComponent";
import FollowUsComponent from "./FollowUsComponent";

export default class FooterComponent {

    public static selector: string = '.footer';

    constructor (private component: Locator) {
        this.component = component;
    }

    informationColumnComponent(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.selector));
    }

    customerServiceComponent(): CustomerServiceComponent {
        return new CustomerServiceComponent(this.component.locator(CustomerServiceComponent.selector));
    }

    myAccountComponent(): MyAccountComponent{
        return new MyAccountComponent(this.component.locator(MyAccountComponent.selector));
    }

    followUsComponent(): FollowUsComponent {
        return new FollowUsComponent(this.component.locator(FollowUsComponent.selector));
    }
    // How co create code template for visual studio code?
}