import {test} from '@playwright/test';
import OrderComputerFlow from '../../test-flows/computer/OrderComputerFlow';
import CheapComputerComponent from '../../models/components/computers/CheapComputerComponent';


test('Test Cheap Computer Component', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-cheap-own-computer');
    const computerFlow: OrderComputerFlow = new OrderComputerFlow(page, CheapComputerComponent);
    await computerFlow.buildCompSpecAndAddToCart();
})