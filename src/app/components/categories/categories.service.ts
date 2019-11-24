import { Categorie } from './categorie.model';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base-services';
import { HttpClient } from '@angular/common/http';
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



   findAll(): Observable<Categorie> {
         return this.httpClient.get<Categorie>(this.baseUrl, this.httpOptions);
   }



}
