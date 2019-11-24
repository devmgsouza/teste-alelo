import { ConfirmDialogModule } from './../../utils/confirm-dialog/confirm-dialog.module';
import { UtilsModule } from './../../utils/utils.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemsComponent } from './items.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsAddModalComponent } from './items-add-modal/items-add-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ItemsComponent, ItemsAddModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UtilsModule,
    NgbModule,
    ConfirmDialogModule
  ], entryComponents: [ItemsComponent, ItemsAddModalComponent]
})
export class ItemsModule { }
