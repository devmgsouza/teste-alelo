import { HttpHeaders, HttpClient, HttpResponse, HttpResponseBase} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
export class BaseService {

    protected baseUrl: string;
    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };



     constructor(
        private httpBase: HttpClient,
        private url: string,
        private localStorage: StorageService
    ) {
        this.baseUrl = this.localStorage.getSession() + this.url;
    }


    save(object: any):  Observable<any> {
        return this.httpBase.post(this.baseUrl, object, this.httpOptions);
    }

    update(object: any):  Observable<any> {
        return this.httpBase.put(this.baseUrl + '/' + object.id, object, this.httpOptions);
    }

    delete(id: number):  Observable<any> {
        return this.httpBase.delete(this.baseUrl + '/' + id, this.httpOptions);
    }

}
