import { ItemsService } from './../items.service';
import { List } from './../../lists/list.model';
import { Categorie } from './../../categories/categorie.model';
import { Item } from './../item.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../categories/categories.service';
import { ListsService } from '../../lists/lists.service';
import { AlertService } from 'ngx-alerts';
import { BaseModal } from 'src/app/core/base-modal';

@Component({
  selector: 'app-items-add-modal',
  templateUrl: './items-add-modal.component.html',
  styleUrls: ['./items-add-modal.component.css']
})
export class ItemsAddModalComponent extends BaseModal implements OnInit {

  formItem: FormGroup;
  title: string;
  action: string;
  id: string;
  idCategory: string;
  idList: string;

  listOfCategories: any;
  listOfLists: any;

  constructor(
     public changeRef: ChangeDetectorRef,
     public aModal: NgbActiveModal,
     public formBuilder: FormBuilder,
     private categoriesService: CategoriesService,
     private listService: ListsService,
     private alertService: AlertService,
     private itemService: ItemsService
  ) { super (changeRef, aModal); }


  loadCategories() {
    this.categoriesService.findAll().subscribe(
      response => {
          this.listOfCategories = response;
      }, err => {
         console.error(err);
      });
  }



  findLists(idCat: any) {
    if (idCat === 0) {
      this.listService.findAll(this.formItem.get('listId').get('itemId').value).subscribe(
        response => {
          this.listOfLists = response;
        }, err => {
           console.error(err);
        });
    } else {
      this.listService.findAll(idCat).subscribe(
        response => {
          this.listOfLists = response;
        }, err => {
           console.error(err);
        });
    }
  }


  ngOnInit() {

    switch (this.action) {
      case '0':
        this.title = 'Add new List';
        this.createItem(new Item(), new List());
        this.loadCategories();
        break;
      case '1':
        this.title = 'Update a List';
        this.createItem(new Item(), new List());
        this.loadCategories();
        this.findLists(this.idCategory);
        this.loadData();
        break;
      case '2':
        this.readOnly = true;
        this.title = 'Details';
        this.createItem(new Item(), new List());
        this.loadCategories();
        this.findLists(this.idCategory);
        this.loadData();
        break;
    }
  }

  createItem(item: Item, list: List) {
    this.formItem = this.formBuilder.group({
       id: [{value: item.id}],

       listId: this.formBuilder.group({
        id: [{value: list.id, disabled: this.readOnly }, [Validators.required]],
        name: [{value: list.name , disabled: this.readOnly }],
        itemId: [{value: list.itemId, disabled: this.readOnly}, [Validators.required] ]
       }),

       name: [{value: item.name, disabled: this.readOnly}, [Validators.required] ],
       done: [{value: item.done = false, disabled: this.readOnly}, [Validators.required] ],
    });
  }

  loadData() {

    this.itemService.findOne(this.idCategory, this.idList, this.id).subscribe(
      response => {
           this.formItem.get('id').setValue(response.id);
           this.formItem.get('name').setValue(response.name);
           this.formItem.get('done').setValue(response.done);
           this.formItem.get('listId').get('id').setValue(this.idList);
           this.formItem.get('listId').get('itemId').setValue(this.idCategory);
      }, err => {
          console.error(err);
      }
    );
  }
  save() {
    if (this.formItem.valid) {
     const item = this.convertToSave(this.formItem);

      if (this.action === '0') {
        this.itemService.saveItem(this.formItem.get('listId').get('itemId').value,
        this.formItem.get('listId').get('id').value, item).subscribe(
          response =>  {
            this.aModal.close(true);
          }
        , err => {
          console.error(err);
          this.alertService.danger(err.error);
        });
      } else if (this.action === '1') {
       this.itemService.updateItem(this.formItem.get('listId').get('itemId').value, item.listId, this.id, item).subscribe(
          response =>  {
            this.aModal.close(true);
          }
        , err => {
            console.error(err);
        });
      }

    } else {
      this.alertService.danger('Must complete all required Items.');
    }
  }


  convertToSave(formItem: FormGroup): Item {
    const item = new Item();
    item.done = formItem.get('done').value;
    item.listId = formItem.get('listId').get('id').value;
    item.name = formItem.get('name').value;
    return item;
  }
}

