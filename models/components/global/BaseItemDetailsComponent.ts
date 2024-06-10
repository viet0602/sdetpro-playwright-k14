import {Locator} from "@playwright/test";
import { selector } from "../SelectorDecorator";

@selector(".product-essential")
export default class BaseItemDetailsComponent {
    protected component: Locator;

    private allOptionSel = '.option-list input';
    private priceSel = '.product-price';
    private productQuantitySel = 'input[class="qty-input"]';
    private addToCartBtnSel = 'input[id^="add-to-cart-button"]';

    protected constructor(component: Locator) {
        this.component = component;
    }

    public async unselectDefaultOptions(): Promise<void> {
        const allOptions: Locator[] = await this.component.locator(this.allOptionSel).all();
        for (let option of allOptions) {
            const isSelected = await option.getAttribute("checked");
            if (isSelected) {
                await option.click();
            }
        }
    }

    public async getProductPrice(): Promise<number> {
        const productPriceEle: Locator = await this.component.locator(this.priceSel);
        return Number(await productPriceEle.textContent());
    }

    public async getProductQuantity(): Promise<number> {
        const productPriceEle: Locator = await this.component.locator(this.productQuantitySel);
        return Number(await productPriceEle.getAttribute('value'));
    }

    public async clickOnAddToCartBtn(): Promise<void> {
        const addToCardBtn: Locator = await this.component.locator(this.addToCartBtnSel);
        await addToCardBtn.scrollIntoViewIfNeeded();
        await addToCardBtn.click();
    }

}