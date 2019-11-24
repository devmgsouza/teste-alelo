import { ConfirmDialogService } from './../../utils/confirm-dialog/confirm-dialog.service';
import { CategorieAddModalService } from './categories-add-modal/categorie-add-modal.service';
import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';
import { Categorie } from './categorie.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  titleOfTable = 'List of Categories';
  listOfContent: any;

  constructor(
    private categorieService: CategoriesService,
    private confirmDialog: ConfirmDialogService,
    private categorieAddService: CategorieAddModalService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loadGrid();

  }

  loadGrid() {
    this.categorieService.findAll().subscribe(
      response => {
          this.listOfContent = response;
      }, err => {
         console.error(err);
      }
  );
  }


  addNewItem() {
    this.categorieAddService.open('0', '-1').then(
      response => {
        if (response) {
          this.loadGrid();
          this.alertService.success('New Item Added.');
        }
      }
    ).catch(
      err => {
        if (err !== 0) {
          console.error(err);
          this.alertService.danger('Cannot insert a new Item. For more informations, look on the console.');
        }
      }
    );

  }

  update(id: any) {
    this.categorieAddService.open('1', id).then(
      response => {
        if (response) {
          this.loadGrid();
          this.alertService.success('item Updated');
        }
      }
    ).catch(
      err => {
        if (err !== 0) {
          console.error(err);
          this.alertService.danger('Cannot update this Item. For more informations, look on the console.');
        }
      }
    );

  }

  showDetails(id: any) {
    this.categorieAddService.open('2', id).then(
      response => {
      }
    ).catch(
      err => {
        if (err !== 0) {
          console.error(err);
        }
      }
    );
  }

  delete(item: any) {
    this.confirmDialog.open('Attention', 'All lists and Items on this Category are be Deleted. Are you sure about that?', 'Yes', 'No').then(
      response => {
        const index = this.listOfContent.indexOf(item);
        if (response) {
          this.categorieService.delete(item.id).subscribe(
            resp => {
                this.alertService.success('Item deleted.');
                this.listOfContent.splice(index, 1);
            }, err => {
              this.alertService.danger('Cannot delete this item. For more informations, look on the console.');
              console.error(err);
            });
        }
        }
    ).catch(
      err => {
        console.error(err);
    });
  }

}
