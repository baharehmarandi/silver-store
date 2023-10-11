import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {DynamicDialogModule} from 'primeng/dynamicdialog'
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const importedModules = [
  ImageModule,
  InputTextModule,
  CarouselModule,
  DynamicDialogModule,
  ProgressSpinnerModule
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
