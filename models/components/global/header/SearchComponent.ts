import {Locator} from "@playwright/test";

export default class SearchComponent {

    public static selector = '.search-box';

    private searchBoxLoc = 'input[id="small-searchterms"]';
    private searchBtnLoc = 'input[class*="search-box-button"]';

    /*
    Khi khởi tạo component thì người ta phải chỉ ra locator của component (componen ở đâu? làm sao có thể
    tìm ra nó)
    */
    constructor(private component: Locator) {
        this.component = component;
    }

    // Narrow down searching scope
    searchBox(): Locator {
        return this.component.locator(this.searchBoxLoc);
    }

    searchBtn(): Locator {
        return this.component.locator(this.searchBtnLoc);
    }
}