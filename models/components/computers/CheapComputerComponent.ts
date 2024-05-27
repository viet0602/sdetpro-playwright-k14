import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";
import {selector} from "../SelectorDecorator";

@selector(".product-essential")
export default class StandardComputerComponent extends ComputerEssentialComponent {

    // Là 1 component nên phải có constructor
    constructor(component: Locator) {
        super(component);
    }
    // Question

    async selectProcessorType(type: string): Promise<void> {
        await this.selectCompOption(type);
    }

    async selectRAMType(type: string): Promise<void> {
        await this.selectCompOption(type);
    }
}