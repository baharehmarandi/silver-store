import {isDevMode, NgModule} from '@angular/core';
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
    StoreModule.forRoot({silverPrice: SilverPriceReducer, Category: CategoryReducer, MainPage: MainPageReducer}),
    EffectsModule.forRoot([SilverPriceEffect, CategoryEffect, MainPageEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
