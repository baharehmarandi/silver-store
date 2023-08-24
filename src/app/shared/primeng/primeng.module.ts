import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';

const importedModules = [
  ImageModule,
  InputTextModule,
  CarouselModule
]

@NgModule({
  declarations: [],
  imports: [
    ...importedModules,
    CommonModule
  ],
  exports: [
    importedModules
  ]
})
export class PrimengModule { }
