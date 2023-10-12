import {Component, Input, OnInit} from '@angular/core';
import {IProducts} from "../../../../../../models/main-page/products.interface";

@Component({
  selector: 'app-quick-show-product-details',
  templateUrl: './quick-show-product-details.component.html',
  styleUrls: ['./quick-show-product-details.component.scss']
})
export class QuickShowProductDetailsComponent implements OnInit {

  @Input() productQuickShowDetails?: IProducts
  selectedSize?: string;
  productCounter: number = 0;

  disablesButton = document.getElementsByClassName('minus-btn');

  ngOnInit() {
    console.log(this.productQuickShowDetails)
    if (this.productCounter >= 0) {
      this.disablesButton[0].removeAttribute('disabled');
    } else {
      this.disablesButton[0].setAttribute('disabled', 'disabled');
    }
  }

  onSelectColor(id: number) {
    const removeSelectedColor = document.getElementsByClassName("product-color selected");
    removeSelectedColor[0]?.classList.remove('selected');
    const selectedColor = document.getElementById(id.toString());
    selectedColor?.classList.add('selected');
  }

  onMinusProduct() {

    if (this.productCounter > 0) {
      this.disablesButton[0].removeAttribute('disabled');
      this.productCounter -= 1;
    } else {
      this.disablesButton[0].setAttribute('disabled', 'disabled');
    }
  }

  onAddProduct() {
    this.disablesButton[0].removeAttribute('disabled');
    this.productCounter += 1;
  }
}
