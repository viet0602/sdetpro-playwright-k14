
import {test} from '@playwright/test';
import ComputerDetailsPage from '../../models/pages/ComputerDetailPage';
import StandardComputerComponent from '../../models/components/computers/StandardComputerComponent';
import CheapComputerComponent from '../../models/components/computers/CheapComputerComponent';
import ComputerEssentialComponent from '../../models/components/computers/ComputerEssentialComponent';

test('Test Generate Component in Page', async ({page}) => {
   const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(page);
    const cheapComputerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(CheapComputerComponent);
    const standardComputerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(StandardComputerComponent);

    await cheapComputerComp.selectProcessorType("dadfdasf");
    await standardComputerComp.selectProcessorType("dadfdasf");

})