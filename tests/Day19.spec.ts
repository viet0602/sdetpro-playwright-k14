import {test} from '@playwright/test';

test('Link Text - XPATH', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");

    const footerLinkEle =
    await page.waitForSelector('//a[contains(text(), "Elemental")]', {timeout: 10000});

    await footerLinkEle.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})


test('Link Text - CSS', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");

    const footerLinkEle =
    await page.locator('a:has-text("Elemental")');
    page.getByRole

    await footerLinkEle.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})

test('Link Text - Filtering', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");

    const footerLinkEle =
    await page.locator('a').filter({hasText: "Elemental"});

    await footerLinkEle.scrollIntoViewIfNeeded();
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);

    await footerLinkEle.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})

test('Multiple matching', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");

    const footerLinkEles = await page.locator('a').elementHandles();
    await footerLinkEles[10].click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})

test('Handle login form', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");

    // Navigating to login form
    await page.locator('a').filter({hasText: "Form Authentication"}).click();
    await page.waitForLoadState("domcontentloaded");
    
    // Form interaction
    await page.locator("#username").fill("viettest@sth.com");
    await page.locator("#password").fill("0987654321");
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("domcontentloaded");
    
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})


test('Element get Text', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");

    // Navigating to login form
    await page.locator('a').filter({hasText: "Form Authentication"}).click();
    await page.waitForLoadState("domcontentloaded");
    
    // Form interaction
    await page.locator("#username").fill("teo@sth.com");
    await page.locator("#password").fill("0987654321");
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
    
    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("domcontentloaded");
    

    // Get text
    const textContent = await page.locator('h4').textContent();
    const innerText = await page.locator('h4').innerText();

    console.log(textContent);
    console.log(innerText);
    
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})
