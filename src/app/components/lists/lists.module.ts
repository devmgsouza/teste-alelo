import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UtilsModule } from './../../utils/utils.module';
import { ListsComponent } from './lists.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsAddModalComponent } from './lists-add-modal/lists-add-modal.component';

@NgModule({
  declarations: [ListsComponent, ListsAddModalComponent],
  imports: [
    CommonModule,
    UtilsModule,
    ReactiveFormsModule,
    FormsModule
  ], entryComponents: [ListsComponent, ListsAddModalComponent]
})
export class ListsModule { }
