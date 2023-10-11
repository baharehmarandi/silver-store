import {Component, Input} from '@angular/core';
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {

  @Input() products?: any;
  @Input() title?: string;

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
