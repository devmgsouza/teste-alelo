import { UtilsModule } from './../../utils/utils.module';
import { CategoriesService } from './categories.service';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ], entryComponents: [
    CategoriesComponent
  ], providers: [
    CategoriesService
  ]
})
export class CategoriesModule { }
