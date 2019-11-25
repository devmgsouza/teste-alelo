import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from './../../utils/confirm-dialog/confirm-dialog.module';
import { UtilsModule } from './../../utils/utils.module';
import { CategoriesService } from './categories.service';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesAddModalComponent } from './categories-add-modal/categories-add-modal.component';
import { CategorieAddModalService } from './categories-add-modal/categorie-add-modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesAddModalComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  entryComponents: [
    CategoriesComponent,
    CategoriesAddModalComponent
  ], providers: [
    CategoriesService,
   CategorieAddModalService
  ]

})
export class CategoriesModule { }
