import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {HomePageComponent} from "../../pages/home-page/home-page.component";
import {SliderComponent} from './components/slider/slider.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
