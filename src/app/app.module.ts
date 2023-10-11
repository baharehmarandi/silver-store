import {CUSTOM_ELEMENTS_SCHEMA, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {SilverPriceReducer} from "./store/silver-price/reducers/silver-price.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SilverPriceEffect} from "./store/silver-price/effects/silver-price.effect";
import {HttpClientModule} from "@angular/common/http";
import {PrimengModule} from "./shared/primeng/primeng.module";
import {CategoryReducer} from "./store/category/reducers/category.reducer";
import {CategoryEffect} from "./store/category/effects/category.effect";
import {MainPageReducer} from "./store/main-page/reducers/main-page.reducer";
import {MainPageEffect} from "./store/main-page/effects/main-page.effect";
import {SharedModule} from "./shared/shared.module";
import {SwiperDirective} from "./shared/swiper/swiper.directive";
import {register} from 'swiper/element/bundle';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {quickShowReducer} from "./store/quick-show/reducers/quik-show.reducer";
import {QuickShowEffects} from "./store/quick-show/effects/quick-show.effect";

register();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    PrimengModule,
    StoreModule.forRoot({silverPrice: SilverPriceReducer, Category: CategoryReducer, MainPage: MainPageReducer, quickShow: quickShowReducer}),
    EffectsModule.forRoot([SilverPriceEffect, CategoryEffect, MainPageEffect, QuickShowEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    SharedModule,
    SwiperDirective,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
