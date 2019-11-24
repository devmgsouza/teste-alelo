import { BaseService } from './../../core/base-services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/core/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends BaseService {


  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    super(httpClient, '/items', storage);
  }



   findAll(): Observable<any> {
         return this.httpClient.get<any>(this.baseUrl + "/lists", this.httpOptions);
   }

}
