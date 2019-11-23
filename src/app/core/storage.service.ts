import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';



@Injectable({
  providedIn: 'root'
})
export class StorageService  {

  constructor(
    private session: SessionStorageService
    ) { }

    value: any = null;
    sessionExpirated = 24;



  setSession(value: string) {
    this.session.set("urlBase", value, this.sessionExpirated, 'h');
  }
  removeSession() {
      this.session.remove("urlBase");
  }
  getSession(): string {
     return this.session.get("urlBase");
  }
  clear() {
      this.session.clear();
  }
}
