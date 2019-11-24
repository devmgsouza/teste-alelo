import { ConfirmDialogService } from './../../utils/confirm-dialog/confirm-dialog.service';
import { ItemsService } from './items.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListsService } from '../lists/lists.service';
import { CategoriesService } from '../categories/categories.service';
import { AlertService } from 'ngx-alerts';

import { ItemsAddModalService } from './items-add-modal/items-add-modal.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  titleOfTable = 'List of Items';
  listOfContent: any;
  listOfCategories: any;
  listOfItems: any;
  categorieId: string;

  formItems: FormGroup;

  constructor(
    private listsService: ListsService,
    private categoriesService: CategoriesService,
    private itemsService: ItemsService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private itemsAddService: ItemsAddModalService,
    private confirmDialog: ConfirmDialogService
  ) { }

  ngOnInit() {
    this.createItem();

    this.categoriesService.findAll().subscribe(
      response => {
          this.listOfCategories = response;
      }, err => {
         console.error(err);
      }
  );

  }

  findLists() {
    this.listsService.findAll(this.formItems.get('idCategorie').value).subscribe(
      response => {
          this.listOfItems = response;
          this.listOfContent = [];
      }, err => {
         console.error(err);
      });
  }

  findItems() {
    this.itemsService.findAll(this.formItems.get('idCategorie').value, this.formItems.get('idList').value).subscribe(
      response => {
          this.listOfContent = response;
      }, err => {
         console.error(err);
      });
  }




  createItem() {
    this.formItems = this.formBuilder.group({
       idCategorie: [{value: null}, [Validators.required ]],
       idList: [{value: null}, [Validators.required ]]
    });
  }



  addNewItem() {
    this.itemsAddService.open('0', '-1', '-1', '-1').then(
      response => {
        if (response) {
          this.findLists() ;
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

  update(item: any) {
    this.itemsAddService.open('1', this.formItems.get('idCategorie').value, item.listId , item.id).then(
      response => {
        if (response) {
          this.findLists();
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

  showDetails(item: any) {
    this.itemsAddService.open('2', this.formItems.get('idCategorie').value, item.listId, item.id).then(
      response => {
      }
    ).catch(
      err => {
        console.error(err);
      }
    );
  }

  delete(item: any) {
    this.confirmDialog.open('Attention', 'You will cannot recovery this Item. Are you sure about that?', 'Yes', 'No').then(
      response => {
        const index = this.listOfContent.indexOf(item);
        if (response) {
          this.itemsService.deleteItem(this.formItems.get('idCategorie').value, item.listId, item.id).subscribe(
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
        if (err !== 0) {
          this.alertService.danger('Cannot delete this item. For more informations, look on the console.');
          console.error(err);
        }
    });
  }

}
