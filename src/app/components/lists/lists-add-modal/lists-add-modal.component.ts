import { List } from './../list.model';
import { ListsService } from './../lists.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../categories/categories.service';
import { BaseModal } from 'src/app/core/base-modal';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-lists-add-modal',
  templateUrl: './lists-add-modal.component.html',
  styleUrls: ['./lists-add-modal.component.css']
})
export class ListsAddModalComponent extends BaseModal implements OnInit {

  formList: FormGroup;
  title: string;
  action: string;
  id: string;
  idCategory: string;
  listOfCategories: any;

  constructor(
     public changeRef: ChangeDetectorRef,
     public aModal: NgbActiveModal,
     public formBuilder: FormBuilder,
     private categoriesService: CategoriesService,
     private listService: ListsService,
     private alertService: AlertService
  ) { super (changeRef, aModal); }

  loadCategories() {
    this.createItem(new List());
    this.categoriesService.findAll().subscribe(
      response => {
          this.listOfCategories = response;
          this.formList.get('itemId').setValue(response);
      }, err => {
         console.error(err);
      });
  }


  ngOnInit() {

    switch (this.action) {
      case '0':
        this.title = 'Add new List';
        this.createItem(new List());
        this.loadCategories();
        break;
      case '1':
        this.loadData();
        this.title = 'Update a List';
        this.createItem(new List());
        this.loadCategories();
        break;
      case '2':
        this.readOnly = true;
        this.loadData();
        this.title = 'Details';
        this.createItem(new List());
        this.loadCategories();
        break;
    }
  }




createItem(list: List) {
  this.formList = this.formBuilder.group({
     id: [{value: list.id}],
     name: [{value: list.name, disabled: this.readOnly }, [Validators.required] ],
     itemId: [{value: list.itemId, disabled: this.readOnly}, [Validators.required] ],
  });
}



loadData() {

  this.listService.findOne(this.idCategory, this.id).subscribe(
    response => {
        this.formList.get('id').setValue(response.id);
        this.formList.get('itemId').setValue(response.itemId);
        this.formList.get('name').setValue(response.name);
    }, err => {
        console.error(err);
    }
  );
}


save() {
  if (this.formList.valid) {
    const idCategory = this.formList.get('itemId').value;

    if (this.action === '0') {
      this.listService.saveList(idCategory, this.formList.value).subscribe(
        response =>  {
          this.aModal.close(true);
        }
      , err => {
        console.error(err);
      });
    } else if (this.action === '1') {
      const id = this.formList.get('id').value;

      this.listService.updateList(idCategory, id, this.formList.value).subscribe(
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




}

