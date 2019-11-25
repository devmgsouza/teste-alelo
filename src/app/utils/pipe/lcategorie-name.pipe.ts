import { CategoriesService } from '../../components/categories/categories.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listName'
})
export class ListNamePipe implements PipeTransform {


  constructor(private categorieService: CategoriesService) { }


  transform(value: string) {
    if (!value) { return ''; }
    let result: string;

    this.categorieService.findOne(value).subscribe(
      response => {
        result = response.name;
      });

    if (result) { return result; }

    return value;
  }

}
