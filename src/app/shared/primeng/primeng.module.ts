import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {DynamicDialogModule} from 'primeng/dynamicdialog'
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';

const importedModules = [
  ImageModule,
  InputTextModule,
  CarouselModule,
  DynamicDialogModule,
  ProgressSpinnerModule,
  DropdownModule,
  SidebarModule,
  ButtonModule,
  AccordionModule,
  CardModule
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
