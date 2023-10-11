import {Component, Input} from '@angular/core';
import {IProducts} from "../../../../../../models/main-page/products.interface";
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-special-offer-images',
  templateUrl: './special-offer-images.component.html',
  styleUrls: ['./special-offer-images.component.scss']
})
export class SpecialOfferImagesComponent {
  @Input() selectedProduct?: IProducts;

  public config: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
  }
}
