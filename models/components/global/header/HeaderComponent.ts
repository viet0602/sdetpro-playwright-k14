import { Locator } from "@playwright/test";
import SearchComponent from "./SearchComponent";

export default class HeaderComponent{

    public static selector = '.header';
    private shoppingCartLink: string = "#topcartlink a";

    constructor(private component: Locator) {
        this.component = component;
    }
    
    searchComponent(): SearchComponent {
        return new SearchComponent(this.component.locator(SearchComponent.selector));
    }

    public async clickOnShoppingCartLink(): Promise<void>{
        await this.component.locator(this.shoppingCartLink).click();
    }
    
}