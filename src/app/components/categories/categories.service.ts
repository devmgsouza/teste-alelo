import { Categorie } from './categorie.model';
import { BaseService } from 'src/app/core/base-services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService  extends BaseService {
 


  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    super(httpClient, '/categories', storage);
  }



   findAll(): Observable<Categorie[]> {
         return this.httpClient.get<Categorie[]>(this.baseUrl, this.httpOptions);
   }


   findOne(id: string): Observable<Categorie> {
    return this.httpClient.get<Categorie>(this.baseUrl + '/' + id, this.httpOptions);
  }




}
