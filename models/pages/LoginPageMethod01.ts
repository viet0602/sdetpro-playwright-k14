// INTRODUCING MAIN INTERACTION METHODS
import { Page } from "@playwright/test";
export default class LoginPageMethod01 {

    // Scope to keep element selectors
    private usernameLogc = '#username';
    private passwordLogc = '#password';
    private loginBtnLoc = 'button[type="submit"]';

    // Constructor
    constructor(private page: Page) {
        this.page = page;    
    }

    // Main interaction methods
    async inputUsername(username: string) {
       await this.page.locator(this.usernameLogc).fill(username);
    }

    async inputPassword(password: string) {
        await this.page.locator(this.passwordLogc).fill(password);
     }

     async clickOnLoginBtn() {
        await this.page.locator(this.loginBtnLoc).click();
     }
}