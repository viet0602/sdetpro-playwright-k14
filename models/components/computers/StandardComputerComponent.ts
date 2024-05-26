import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";
import {selector} from "../SelectorDecorator";

@selector(".StandardComputerComnponent.selector")
export default class StandardComputerComponent extends ComputerEssentialComponent {

    // Là 1 component nên phải có constructor
    constructor(component: Locator) {
        super(component);
    }
    // Question

    selectProcessorType(type: string): Promise<void> {
        console.log('selectProcessorType | StandardComputerComponent')
        return Promise.resolve(undefined);
    }
    selectRAMType(type: string): Promise<void> {
        return Promise.resolve(undefined);
    }
}