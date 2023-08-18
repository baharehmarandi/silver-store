import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    StoreModule.forRoot({silverPrice: SilverPriceReducer, Category: CategoryReducer}),
    EffectsModule.forRoot([SilverPriceEffect, CategoryEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
