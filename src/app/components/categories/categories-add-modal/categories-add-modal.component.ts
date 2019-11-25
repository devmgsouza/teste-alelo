import { CategoriesService } from './../categories.service';
import { Categorie } from './../categorie.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModal } from 'src/app/core/base-modal';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-categories-add-modal',
  templateUrl: './categories-add-modal.component.html',
  styleUrls: ['./categories-add-modal.component.css']
})
export class CategoriesAddModalComponent extends BaseModal implements OnInit {

  formCategorie: FormGroup;
  title: string;
  action: string;
  id: string;

  constructor(
     public changeRef: ChangeDetectorRef,
     public aModal: NgbActiveModal,
     public formBuilder: FormBuilder,
     private categoriesService: CategoriesService,
     private alertService: AlertService
  ) { super (changeRef, aModal); }



  ngOnInit() {
    switch (this.action) {
      case '0':
        this.createItem(new Categorie());
        this.title = 'Add new Categorie';
        break;
      case '1':
        this.createItem(new Categorie());
        this.loadData();
        this.title = 'Update a Categorie';
        break;
      case '2':
        this.readOnly = true;
        this.createItem(new Categorie());
        this.loadData();
        this.title = 'Details';
        break;
    }
  }



  createItem(categorie: Categorie) {
    this.formCategorie = this.formBuilder.group({
       id: [{value: categorie.id}],
       name: [{value: categorie.name, disabled: this.readOnly }, [Validators.required] ],
       observe: [{value: categorie.observe, disabled: this.readOnly}],
       nome: [{value: categorie.nome, disabled: this.readOnly}]
    });
  }



  loadData() {
    this.categoriesService.findOne(this.id).subscribe(
      response => {
          this.formCategorie.get('id').setValue(response.id);
          this.formCategorie.get('name').setValue(response.name);
          this.formCategorie.get('observe').setValue(response.observe);
          this.formCategorie.get('nome').setValue(response.nome);
      }, err => {
          console.error(err);
      }
    );
  }


  save() {
    if (this.formCategorie.valid) {

      if (this.action === '0') {
        this.categoriesService.save(this.formCategorie.value).subscribe(
          response =>  {
            this.aModal.close(true);
          }
        , err => {
          console.error(err);
        });
      } else if (this.action === '1') {
        this.categoriesService.update(this.formCategorie.value).subscribe(
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
