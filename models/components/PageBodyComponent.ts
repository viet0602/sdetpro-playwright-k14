import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {

  public static selector = '.page-body';

  constructor(private component: Locator) {
    this.component = component;
  }

  async productItemComponentList(): Promise<ProductItemComponent[]> {
    const productItemComponents = await this.component
      .locator(ProductItemComponent.selector)
      .all(); // Tìm ra tất cả các locator
    return productItemComponents.map((comp) => new ProductItemComponent(comp)); // ánh xạ locator thành dạng object
  }
}
