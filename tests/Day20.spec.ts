import { test } from "@playwright/test";

test("Handle dropdown options", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdownEle = await page.locator("#dropdown");

  //Select option1
  await dropdownEle.selectOption({ index: 1 });
  await page.waitForTimeout(2000);

  //Select option2
  await dropdownEle.selectOption({ value: "2" });
  //DEBUG only
  await page.waitForTimeout(2000);
});

test("Handle iframe", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");

  // Target the iframe using frameLocator
  const iframeEle = await page.frameLocator('iframe[id^="mce"]');

  // Find edit text area in the iframe
  const editTextAreaEle = await iframeEle.locator("body p");

  // Clear then input new content
  await editTextAreaEle.click();
  await editTextAreaEle.clear();
  await editTextAreaEle.fill("Hello World!");

  //Interact with the main frame's element
  const footerPowerByLinkEle = await page.locator('a:has-text("Elemental")');
  await footerPowerByLinkEle.click();

  //DEBUG only
  await page.waitForTimeout(3000);
});
test.only("Mouse hover and narrowdown searching scope", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  // Find all figures
  const allFigureEles = await page.locator('.figure').all();

  // Loop alll the figures
  for(const figureEle of allFigureEles){
      // and narrowdown searching scope
      const imgEle = await figureEle.locator('img');

      const usernameEle = await figureEle.locator('h5');
      const viewProfileHyperlinkEle = await figureEle.locator('a');
      const isUsernameVisible = await usernameEle.isVisible();
      const isViewProfileHyperlinkVisible = await viewProfileHyperlinkEle.isVisible();
      console.log(`isUsernameVisibleBefore: ${isUsernameVisible}`);
      console.log(`isViewProfileHyperlinkVisibleBefore: ${isViewProfileHyperlinkVisible}`);
      
      // Mouse hover
      await imgEle.hover();
      const isUsernameVisibleAfter = await usernameEle.isVisible();
      const isViewProfileHyperlinkVisibleAfter = await viewProfileHyperlinkEle.isVisible();
      console.log(`isUsernameVisibleAfter: ${isUsernameVisibleAfter}`);
      console.log(`isViewProfileHyperlinkVisible: ${isViewProfileHyperlinkVisibleAfter}`);

      // DEBUG PURPOSE ONLY
      await page.waitForTimeout(1000);
  }
});

test("Checking element status and handle dynamic states", async ({page,}) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

  //Locate 2 parent components
  const checkboxComp = await page.locator("#checkbox-example");
  const inputExampleComp = await page.locator("#input-example");

  // Interact with the checkbox component
  const checkboxEle = await checkboxComp.locator("#checkbox input");
  let isSelected = await checkboxEle.isChecked();
  if (!isSelected) {
    await checkboxEle.click();
  }
  let isSelectedAfter = await checkboxEle.isChecked();
  if (!isSelectedAfter) {
    await checkboxEle.click();
  }

  const removeBtn = await checkboxComp.locator('button');
  await removeBtn.click();
  await page.waitForSelector('#checkbox-example #checkbox input', { state: "hidden", timeout: 5*1000 }); 

  //Interact with the editable textbox
  const editableTextboxEle = await inputExampleComp.locator('input');
  const enableBtn = await inputExampleComp.locator('button');
  let isEnabled = await editableTextboxEle.isEnabled();
  if(!isEnabled){
    await enableBtn.click();
  }
  await page.waitForSelector('#input-example p#message', {state: "visible", timeout: 5*1000 });
  let isEnabledAfter = await editableTextboxEle.isEnabled();
  if(isEnabledAfter){
    await editableTextboxEle.fill("Hello World!");
    await enableBtn.click();
  }


});
