import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SilverPriceComponent} from "./header/components/silver-price/silver-price.component";
import {SearchComponent} from './header/components/search/search.component';
import {PrimengModule} from "./primeng/primeng.module";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from './header/components/navbar/navbar.component';
import {CategoryListsComponent} from './header/components/category-lists/category-lists.component';
import {CountdownComponent} from './countdown/countdown.component';
import {ProductSliderComponent} from './product/product-slider/product-slider.component';
import {ProductCardsComponent} from './product/product-cards/product-cards.component';
import {SwiperDirective} from "./swiper/swiper.directive";
import {QuickShowComponent} from './product/product-cards/quick-show/quick-show.component';
import {DialogModule} from "primeng/dialog";
import {DialogService, DynamicDialogConfig} from "primeng/dynamicdialog";
import {LoadingComponent} from './loading/loading.component';
import {
  QuickShowSliderComponent
} from './product/product-cards/quick-show/components/quick-show-slider/quick-show-slider.component';
import {
  QuickShowProductDetailsComponent
} from './product/product-cards/quick-show/components/quick-show-product-details/quick-show-product-details.component';
import {
  QuickShowProductImageComponent
} from './product/product-cards/quick-show/components/quick-show-product-image/quick-show-product-image.component';
import {AddToCardComponent} from './product/product-cards/quick-show/components/add-to-card/add-to-card.component';
import {MobileHeaderComponent} from './header/components/mobile-header/mobile-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SilverPriceComponent,
    SearchComponent,
    NavbarComponent,
    CategoryListsComponent,
    CountdownComponent,
    ProductSliderComponent,
    ProductCardsComponent,
    QuickShowComponent,
    LoadingComponent,
    QuickShowSliderComponent,
    QuickShowProductDetailsComponent,
    QuickShowProductImageComponent,
    AddToCardComponent,
    MobileHeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    NgOptimizedImage,
    SwiperDirective,
    DialogModule
  ],
    exports: [
        HeaderComponent,
        SilverPriceComponent,
        CountdownComponent,
        ProductSliderComponent,
        ProductCardsComponent
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DialogService, DynamicDialogConfig]
})
export class SharedModule { }
