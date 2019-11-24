import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';
import { Categorie } from './categorie.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  titleOfTable = 'List of Categories';
  listOfContent: any;

  constructor(
    private categorieService: CategoriesService
  ) { }

  ngOnInit() {
    this.categorieService.findAll().subscribe(
      response => {
          this.listOfContent = response;
      }, err => {
         console.error(err);
      }
  );

  }

}
