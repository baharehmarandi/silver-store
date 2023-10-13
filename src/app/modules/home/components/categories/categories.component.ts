import {Component, Input} from '@angular/core';
import {ICategory} from "../../../../models/category.interface";
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Input() categories?: ICategory[];

  public config: SwiperOptions = {
    autoHeight: true,
    spaceBetween: 10,
    breakpoints: {
      1229: {
        slidesPerView: 6.15,
      },
      1200: {
        slidesPerView: 5,
      },
      769: {
        slidesPerView: 5.25,
      },
      467: {
        slidesPerView: 3.25,
      },
      375: {
        slidesPerView: 1.15,
      }
    }
  }
}
