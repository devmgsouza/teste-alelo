import { BaseService } from './../../core/base-services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/core/storage.service';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends BaseService {


  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    super(httpClient, '/categories', storage);
  }



   findAll(idCategorie: string, idList: string): Observable<any> {
         return this.httpClient.get<any>(this.baseUrl + '/' + idCategorie + '/lists/' + idList + '/items', this.httpOptions);
   }


  findOne(idCategory: any, idList: any, id: any): Observable<Item> {
    return this.httpClient.get<Item>(this.baseUrl + '/' + idCategory + '/lists/' + idList + '/items/' + id, this.httpOptions);
  }


  saveItem(idCategory: any, idList: any, object: any):  Observable<any> {
    return this.httpClient.post(this.baseUrl + '/' + idCategory + '/lists/' + idList +
     '/items', object, this.httpOptions);
  }

  updateItem(idCategory: any, idList: any, id: any, object: any):  Observable<any> {
      return this.httpClient.put(this.baseUrl + '/' + idCategory
      + '/lists/' + idList + '/items/' + id, object, this.httpOptions);
  }

  deleteItem(idCategory: any, idList: any, id: any):  Observable<any> {
      return this.httpClient.delete(this.baseUrl + '/' + idCategory
      + '/lists/' + idList + '/items/' + id, this.httpOptions);
  }

}
