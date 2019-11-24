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
    super(httpClient, '/lists', storage);
  }



   findAll(): Observable<any> {
         return this.httpClient.get<any>(this.baseUrl + "/lists", this.httpOptions);
   }

}
