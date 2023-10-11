import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {HomePageComponent} from "../../pages/home-page/home-page.component";
import {SliderComponent} from './components/slider/slider.component';
import {PrimengModule} from "../../shared/primeng/primeng.module";
import {CategoriesComponent} from './components/categories/categories.component';
import {SwiperDirective} from "../../shared/swiper/swiper.directive";
import {SpecialOfferComponent} from './components/special-offer/special-offer.component';
import {CountdownModule} from "ngx-countdown";
import {
  SpecialOfferDetailsComponent
} from './components/special-offer/components/special-offer-details/special-offer-details.component';
import {
  SpecialOfferImagesComponent
} from './components/special-offer/components/special-offer-images/special-offer-images.component';
import {
  SpecialOfferSliderComponent
} from './components/special-offer/components/special-offer-slider/special-offer-slider.component';
import {BannersComponent} from './components/banners/banners.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    CategoriesComponent,
    SpecialOfferComponent,
    SpecialOfferDetailsComponent,
    SpecialOfferImagesComponent,
    SpecialOfferSliderComponent,
    BannersComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PrimengModule,
    SwiperDirective,
    CountdownModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
