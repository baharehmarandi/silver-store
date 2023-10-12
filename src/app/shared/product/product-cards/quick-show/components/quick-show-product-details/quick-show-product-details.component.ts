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

  ngOnInit() {
    console.log(this.productQuickShowDetails)
  }

  onSelectColor(id: number){
    const selectedColor = document.getElementById(id.toString());
    selectedColor?.classList.add('selected');
  }
}
