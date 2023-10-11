import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {SwiperOptions} from "swiper/types";
import {ISpecialOffers} from "../../../../../../models/main-page/special-offers.interface";

@Component({
  selector: 'app-special-offer-slider',
  templateUrl: './special-offer-slider.component.html',
  styleUrls: ['./special-offer-slider.component.scss']
})
export class SpecialOfferSliderComponent implements AfterViewInit {

  @Input() specialOffers?: ISpecialOffers
  @Output() onSpecialOfferProductIdSet = new EventEmitter<number>();


  public config: SwiperOptions = {
      spaceBetween: 30,
      slidesPerView: 4,
      direction: 'vertical'
  }

  ngAfterViewInit(): void {
    const activeElement = document.getElementsByClassName("special-offer-slider")[0];
    activeElement.classList.add("activeElement");
  }

  onSpecialOfferProductId(id: number){
    this.onSpecialOfferProductIdSet.emit(id);
    const activeElement = document.getElementsByClassName("special-offer-slider")[id];
    activeElement.classList.add("activeElement")

    for (let i = 0; i < this.specialOffers?.products?.length! ; i++) {
      if(i !== id){
        const unSelectedElementBefore = document.getElementsByClassName("special-offer-slider")[i];
        unSelectedElementBefore.classList.remove("activeElement")
      }
    }
  }
}
