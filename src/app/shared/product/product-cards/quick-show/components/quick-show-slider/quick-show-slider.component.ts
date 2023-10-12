import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {IProducts} from "../../../../../../models/main-page/products.interface";
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-quick-show-slider',
  templateUrl: './quick-show-slider.component.html',
  styleUrls: ['./quick-show-slider.component.scss']
})
export class QuickShowSliderComponent {

  @ViewChild("selectArtSlider") slide?: ElementRef;
  @Input() productSlideImage?: IProducts;
  @Output() productImageLink = new EventEmitter<string>();

  slideNextIsEnd: boolean = false;
  slidePrevIsEnd: boolean = true;

  public config: SwiperOptions = {
    spaceBetween: 5,
    slidesPerView: 4,
    direction: 'vertical',
    simulateTouch: false,
  }

  onButtonNext(){

    this.slide?.nativeElement?.swiper?.slideNext();
    this.onChangeButtonColor();
  }

  onButtonPrev() {

    this.slide?.nativeElement?.swiper?.slidePrev();
    this.onChangeButtonColor();
  }

  onChangeButtonColor(){

    this.slideNextIsEnd = this.slide?.nativeElement.swiper?.isBeginning;
    this.slidePrevIsEnd = this.slide?.nativeElement.swiper?.isEnd;

    const buttonNextAddClass = document.getElementsByClassName('next-button');
    const buttonPrevAddClass = document.getElementsByClassName('prev-button');

    if(this.slideNextIsEnd && !this.slidePrevIsEnd){

      buttonNextAddClass[0].classList.add('buttonIsEnable');
      buttonNextAddClass[0].classList.remove('buttonIsDisable');

      buttonPrevAddClass[0].setAttribute('disabled','disabled');
      buttonNextAddClass[0].removeAttribute('disabled');

      buttonPrevAddClass[0].classList.add('buttonIsDisable');
      buttonPrevAddClass[0].classList.remove('buttonIsEnable');

    } else {

      buttonNextAddClass[0].classList.add('buttonIsDisable');
      buttonNextAddClass[0].classList.remove('buttonIsEnable');

      buttonNextAddClass[0].setAttribute('disabled','disabled');
      buttonPrevAddClass[0].removeAttribute('disabled');

      buttonPrevAddClass[0].classList.add('buttonIsEnable');
      buttonPrevAddClass[0].classList.remove('buttonIsDisable');
    }
  }

  onShowImageId(image?: string){
    this.productImageLink.emit(image);
  }
}
