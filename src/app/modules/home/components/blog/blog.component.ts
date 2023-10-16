import {Component} from '@angular/core';
import {IBlog} from "../../../../models/main-page/blog.interface";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectPosts} from "../../../../store/blog/selectors/blog.selector";
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts$: Observable<IBlog[] | undefined>
  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPosts)
  }

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
