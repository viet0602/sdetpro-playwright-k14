import { Locator, Page } from "@playwright/test";
import ComputerEssentialComponent from "../components/computers/ComputerEssentialComponent";
import HeaderComponent from "../components/global/header/HeaderComponent";

// Người đúc bánh - ComputerComponentConstructor chỉ đúc bánh cho loại bánh ComputerEssentialComponent
// = Sync tax của constructor - không có đối số, trả về loại Tun - is a ComputerEssentialComponent thì lôi constructor

// Khi anh nhận về 1 cái khuôn là 1 component loại Tun - is a ComputerEssentialComponent thì lôi constructor
// ra để init 1 object và trả về đúng Tun
export type ComputerComponentConstructor<
  Tun extends ComputerEssentialComponent
> = new (component: Locator) => Tun;

export default class ComputerDetailsPage {
  private barNotificationSel = "#bar-notification p";

  constructor(private page: Page) {
    this.page = page;
  }
  public async getBarNotificationText(): Promise<string> {
    const text = await this.page.locator(this.barNotificationSel).textContent();
    if (text === null) {
      return "Doesn't show notification";
    }
    return text || "";
  }

  public headerComponent(): HeaderComponent {
    return new HeaderComponent(this.page.locator(HeaderComponent.selector));
  }
  /*<>: Diamond synctax : Định nghĩa một loại Tun is a ComputerEssentialComponent - Boundary Generic type
    ** Để chỉ cho Type script Compiler biết rằng tôi muốn nhận vào 1 cái khuôn chứ  không phải 1 cái object
    --> Tạo ra một người làm bánh

    */
  // Boundary Generic Type
  // Lấy computerComponent,
  computerComp<Tun extends ComputerEssentialComponent>(
    computerComponentClass: ComputerComponentConstructor<Tun>
  ): Tun {
    return new computerComponentClass(
      this.page.locator(computerComponentClass.selectorValue)
    );
  }
}
