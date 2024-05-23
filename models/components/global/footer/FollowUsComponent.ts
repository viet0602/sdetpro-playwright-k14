import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

export default class FollowUsComponent extends FooterColumnComponent {
    
    public static selector: string  = ".column.follow-us";

    constructor(component: Locator) {
        super(component);
    }

}