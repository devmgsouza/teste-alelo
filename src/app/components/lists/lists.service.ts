import { List } from './list.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/core/storage.service';
import { BaseService } from 'src/app/core/base-services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService  extends BaseService {


  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    super(httpClient, '/categories', storage);
  }



   findAll(id: any): Observable<List> {
         return this.httpClient.get<List>(this.baseUrl + '/' + id + '/lists', this.httpOptions);
   }


   findOne(idCategory: any, id: any): Observable<List> {
    return this.httpClient.get<List>(this.baseUrl + '/' + idCategory + '/lists/' + id, this.httpOptions);
  }


  saveList(idCategory: any, object: any):  Observable<any> {
    return this.httpClient.post(this.baseUrl + '/' + idCategory + '/lists', object, this.httpOptions);
  }

  updateList(idCategory: any, id: any, object: any):  Observable<any> {
      return this.httpClient.put(this.baseUrl + '/' + idCategory + '/lists/' + id, object, this.httpOptions);
  }

  deleteList(idCategory: any, id: any):  Observable<any> {
      return this.httpClient.delete(this.baseUrl + '/' + idCategory + '/lists/' + id, this.httpOptions);
  }


}
