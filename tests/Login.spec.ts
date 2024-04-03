import { chromium, Browser, Page , BrowserContext} from "playwright";
import { test } from "@playwright/test";

test("Login test", async ({page}) => {
  //const browser: Browser = await chromium.launch();
  //const context: BrowserContext = await browser.newContext();
 //const page: Page = await context.newPage();
  await page.goto("https://playwright.dev/");
  const elem =  await page.locator('vitxinh.com');
  await elem.click();
 // await browser.close();
});
