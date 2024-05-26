import { Locator, Page } from "@playwright/test";
import ComputerEssentialComponent from "../components/computers/ComputerEssentialComponent";

// Người đúc bánh - ComputerComponentConstructor chỉ đúc bánh cho loại bánh ComputerEssentialComponent
// = Sync tax của constructor - không có đối số, trả về loại Tun - is a ComputerEssentialComponent thì lôi constructor

// Khi anh nhận về 1 cái khuôn là 1 component loại Tun - is a ComputerEssentialComponent thì lôi constructor
// ra để init 1 object và trả về đúng Tun
type ComputerComponentConstructor<Tun extends ComputerEssentialComponent> = new(component: Locator) => Tun;

export default class ComputerDetailsPage{

constructor(private page: Page) {
        this.page = page;
    }
    /*<>: Diamond synctax : Định nghĩa một loại Tun is a ComputerEssentialComponent - Boundary Generic type
    ** Để chỉ cho Type script Compiler biết rằng tôi muốn nhận vào 1 cái khuôn chứ  không phải 1 cái object
    --> Tạo ra một người làm bánh

    */
   // Boundary Generic Type
   // Lấy computerComponent,
    computerComp<Tun extends ComputerEssentialComponent>(computerComponentClass: ComputerComponentConstructor<Tun>):Tun{
        console.log(computerComponentClass.selectorValue)
        return new computerComponentClass(this.page.locator("abc"));

    }
}
