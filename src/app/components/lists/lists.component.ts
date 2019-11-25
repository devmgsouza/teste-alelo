import { ConfirmDialogService } from './../../utils/confirm-dialog/confirm-dialog.service';
import { CategoriesService } from './../categories/categories.service';
import { ListsService } from './lists.service';
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categories/categorie.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { ListsAddModalService } from './lists-add-modal/lists-add-modal.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  titleOfTable = 'List of Lists';
  listOfContent: any[];
  listOfCategories: Categorie[];
  categorieId: string;
  readOnly = true;
  formList: FormGroup;
  pesquisaVazia: boolean = false;
  constructor(
    private listsService: ListsService,
    private categoriesService: CategoriesService,
    private listAddService: ListsAddModalService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
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

    this.listsService.findAll(this.formList.get('idCategorie').value).subscribe(
      response => {
          this.listOfContent = response;
          if (this.listOfContent.length > 0) {
            this.readOnly = false;
            this.pesquisaVazia = false;
          } else {
            this.readOnly = true;
            this.pesquisaVazia = true;
          }
      }, err => {
         console.error(err);
      });
  }






  addNewItem() {
    this.listAddService.open('0', this.formList.get('idCategorie').value, '-1').then(
      response => {
        if (response) {
          this.findLists() ;
          this.alertService.success('New Item Added.');
        }
      }
    ).catch(
      err => {
        if (err !== 0 && err !== 1) {
          console.error(err);
          this.alertService.danger('Cannot insert a new Item. For more informations, look on the console.');
        }

      }
    );

  }

  update(item: any) {
    this.listAddService.open('1', item.itemId , item.id).then(
      response => {
        if (response) {
          this.findLists();
          this.alertService.success('item Updated');
        }
      }
    ).catch(
      err => {
        if (err !== 0 && err !== 1) {
          console.error(err);
          this.alertService.danger('Cannot update this Item. For more informations, look on the console.');
        }
      }
    );

  }

  showDetails(item: any) {
    this.listAddService.open('2', item.itemId, item.id).then(
      response => {
      }
    ).catch(
      err => {
        if (err !== 0 && err !== 1) {
          console.error(err);
        }
      }
    );
  }

  delete(item: any) {
    this.confirmDialog.open('Attention', 'All Items on this List are be Deleted. Are you sure about that?', 'Yes', 'No').then(
      response => {
        const index = this.listOfContent.indexOf(item);
        if (response) {
          this.listsService.deleteList(item.itemId, item.id).subscribe(
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
        if (err !== 0 && err !== 1) {
          this.alertService.danger('Cannot delete this item. For more informations, look on the console.');
          console.error(err);
        }
    });
  }


  createItem() {
    this.formList = this.formBuilder.group({
       idCategorie: [{value: null}, [Validators.required ]],
       name: [{value: null}]
    });
  }


}
