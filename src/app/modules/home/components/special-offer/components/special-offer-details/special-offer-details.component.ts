import {Component, Input, OnInit} from '@angular/core';
import {IProductCategory} from "../../../../../../models/main-page/product-category.interface";
import {IProductFeatures} from "../../../../../../models/main-page/product-features.interface";
import {IProductColors} from "../../../../../../models/main-page/product-colors.interface";
import {IStoneColors} from "../../../../../../models/main-page/stone-colors.interface";
import {IProductSizes} from "../../../../../../models/main-page/product-sizes.interface";
import {IProductSilverPrice} from "../../../../../../models/main-page/product-silver-price.interface";
import {ISimilarProducts} from "../../../../../../models/main-page/similar-products.interface";
import {ISetProducts} from "../../../../../../models/main-page/setProducts.interface";
import {IProducts} from "../../../../../../models/main-page/products.interface";

export interface ISpecialOfferDetails{
  id: number,
  title?: string,
  description?: string,
  bookmark?: boolean,
  defaultWeight?: number,
  fee?: number,
  discount?: number,
  status?: string,
  category?: IProductCategory,
  features?: IProductFeatures[],
  colors?: IProductColors[],
  stoneColors?: IStoneColors[],
  sizes: IProductSizes[],
  review?: string,
  silverPrice?: IProductSilverPrice,
  similarProducts?: ISimilarProducts[],
  setProducts?: ISetProducts[],
  isSet?: boolean,
  images: string[]
}

@Component({
  selector: 'app-special-offer-details',
  templateUrl: './special-offer-details.component.html',
  styleUrls: ['./special-offer-details.component.scss']
})
export class SpecialOfferDetailsComponent implements OnInit {

  @Input() selectedProduct?: IProducts;

  discountFee?: number;

  ngOnInit() {
    if(this.selectedProduct?.discount !== 0){
      this.discountFee = this.selectedProduct?.fee! - (this.selectedProduct?.fee! * this.selectedProduct?.discount!/100)
    }
  }
}
