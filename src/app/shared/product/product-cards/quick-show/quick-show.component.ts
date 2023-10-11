import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {IProducts} from "../../../../models/main-page/products.interface";
import {Store} from "@ngrx/store";
import {QuickShowActions} from "../../../../store/quick-show/actions/quick-show.action";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {selectQuickShow, selectQuickShowLoading} from "../../../../store/quick-show/selectors/quick-show.selector";
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-quick-show',
  templateUrl: './quick-show.component.html',
  styleUrls: ['./quick-show.component.scss']
})
export class QuickShowComponent implements OnInit {
  @ViewChild("selectArtSlider") slide?: ElementRef;

  quickShow$: Observable<IProducts | undefined>;
  quickShowLoading$: Observable<boolean | undefined>;
  slidePrevIsEnd: boolean = false;
  slideNextIsEnd: boolean = true;
  // slideNextIsEnd: boolean = false;
  // slideNextIsBeginning: boolean = true;
  //
  // slidePrevIsEnd: boolean = true;
  // slidePrevIsBeginning: boolean = false;

  constructor(private store: Store,
              private dynamicDialogConfig: DynamicDialogConfig) {
    this.quickShow$ = this.store.select(selectQuickShow);
    this.quickShowLoading$ = this.store.select(selectQuickShowLoading);
  }

  public config: SwiperOptions = {
    spaceBetween: 5,
    slidesPerView: 4,
    direction: 'vertical'
  }

  ngOnInit() {
    this.store.dispatch(QuickShowActions.loadQuickShow({id: this.dynamicDialogConfig.data?.id}));
  }

  onButtonNext(){
    this.slide?.nativeElement?.swiper?.slideNext(.3, false);
    // this.slidePrevIsEnd = this.slide?.nativeElement.swiper?.isBeginning;
    this.slideNextIsEnd = this.slide?.nativeElement.swiper?.isEnd;
    this.slidePrevIsEnd = this.slide?.nativeElement.swiper?.isBeginning;
    // console.log(this.slidePrevIsEnd)

    if(this.slidePrevIsEnd){
      const buttonNextAddClass = document.getElementsByClassName('next-button');
      buttonNextAddClass[0].classList.add('buttonIsDisable')
      buttonNextAddClass[0].classList.remove('buttonIsEnable')
    } else {

      const buttonNextAddClass = document.getElementsByClassName('next-button');
      buttonNextAddClass[0].classList.add('buttonIsEnable')
      buttonNextAddClass[0].classList.remove('buttonIsDisable')
    }
  }

  onButtonPrev() {
    this.slide?.nativeElement?.swiper?.slidePrev(.3, false);
    // this.slideNextIsEnd = this.slide?.nativeElement.swiper?.isEnd;
    this.slidePrevIsEnd = this.slide?.nativeElement.swiper?.isEnd;
    this.slideNextIsEnd = this.slide?.nativeElement.swiper?.isBeginning;
    // console.log(this.slideNextIsEnd)
    if(this.slideNextIsEnd){
      const buttonAddClass = document.getElementsByClassName('prev-button');
      buttonAddClass[0].classList.add('buttonIsDisable')
      buttonAddClass[0].classList.remove('buttonIsEnable')
    } else {

      const buttonAddClass = document.getElementsByClassName('prev-button');
      buttonAddClass[0].classList.add('buttonIsEnable')
      buttonAddClass[0].classList.remove('buttonIsDisable')
    }
  }
}
