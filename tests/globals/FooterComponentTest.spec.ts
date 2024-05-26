import {test} from "@playwright/test";
import FooterTestFlow from "../../test-flows/global/FooterTestFlow";

// Data driven
const baseUrl = 'https://demowebshop.tricentis.com';
const PAGES = [
    {
        pageName : 'HomePage',
        slug: '/',
    },
    {
        pageName : 'Login page',
        slug: '/login',
    },
    {
        pageName : 'Register page',
        slug: '/register',
    }
]
PAGES.forEach(page => {
    const {pageName, slug} = page;
    test(`Test Footer component on ${pageName}`, async ({page}) => {
        await page.goto(baseUrl.concat(slug));
        const footerTestFlow: FooterTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComponent();
    })
})
// TODO: Header Component
