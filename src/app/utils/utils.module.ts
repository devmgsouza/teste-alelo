import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BoolPipePipe } from './pipe/bool-pipe.pipe';


@NgModule({
  declarations: [
    GridComponent,
    BoolPipePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ], exports: [
    GridComponent, BoolPipePipe
  ]
})
export class UtilsModule { }
