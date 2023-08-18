import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SilverPriceComponent} from "./header/components/silver-price/silver-price.component";
import { SearchComponent } from './header/components/search/search.component';
import {PrimengModule} from "./primeng/primeng.module";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './header/components/navbar/navbar.component';
import { CategoryListsComponent } from './header/components/category-lists/category-lists.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SilverPriceComponent,
    SearchComponent,
    NavbarComponent,
    CategoryListsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    NgOptimizedImage
  ],
  exports: [
    HeaderComponent,
    SilverPriceComponent
  ]
})
export class SharedModule { }
