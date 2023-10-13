import {Component, Input} from '@angular/core';
import {SwiperOptions} from "swiper/types";
import {IProducts} from "../../../../../models/main-page/products.interface";

@Component({
  selector: 'app-mobile-special-offer',
  templateUrl: './mobile-special-offer.component.html',
  styleUrls: ['./mobile-special-offer.component.scss']
})
export class MobileSpecialOfferComponent {

  @Input() endTime?: string;
  @Input() specialOfferProducts?: IProducts[];

  public config: SwiperOptions = {

    autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 4,
    breakpoints: {
      1229: {
        slidesPerView:4,
      },
      1200: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2.25,
      },
      467: {
        slidesPerView: 1.25,
      },
      375: {
        slidesPerView: 1.15,
      }
    }
  }
}
