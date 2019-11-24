import { ConfirmDialogComponent } from './confirm-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from './confirm-dialog.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfectScrollbarModule
  ], providers: [
    ConfirmDialogService
  ], entryComponents: [
    ConfirmDialogComponent
  ]
})
export class ConfirmDialogModule { }
