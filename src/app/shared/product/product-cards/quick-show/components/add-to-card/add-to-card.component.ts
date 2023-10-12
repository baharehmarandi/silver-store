import {Component, Input, OnInit} from '@angular/core';
import {IProducts} from "../../../../../../models/main-page/products.interface";

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss']
})
export class AddToCardComponent implements OnInit{

  @Input() productFee?: IProducts
  discountedFee?: number;
  addToFavorite?: boolean = false;

  ngOnInit() {
    this.discountedFee = this.productFee?.fee! - (this.productFee?.fee! * this.productFee?.discount!/100);
  }

  onAddToFavorite(){
    this.addToFavorite = true;
  }
}
