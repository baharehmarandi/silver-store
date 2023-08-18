import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';

const importedModules = [
  ImageModule,
  InputTextModule
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
