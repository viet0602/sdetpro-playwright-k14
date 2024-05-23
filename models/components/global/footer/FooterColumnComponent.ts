import { Locator } from "@playwright/test";

// NOTE: a base component has NO selector
export default class FooterColumnComponent {

    private titleSel: string = "h3"; // từ component cha chỉ có 1 h3
    private linksSel: string = "li a";

    // Force component con input locator khi dùng
    constructor(private component: Locator) {
        this.component = component;
    }

    // Mỗi component có title và 1 list các link
    title(): Locator {
        return this.component.locator(this.titleSel);
    }

    links(): Promise<Array<Locator>> {
        return this.component.locator(this.linksSel).all();
    }


}