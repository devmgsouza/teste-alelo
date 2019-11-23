import { ItemsComponent } from './items.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule
  ], entryComponents: [ItemsComponent]
})
export class ItemsModule { }
