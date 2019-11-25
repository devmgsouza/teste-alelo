import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";



@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loader: NgxSpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        setTimeout(() => {this.loader.show(); }, 0 );
        return next.handle(req).pipe(
            finalize(() =>  {

                setTimeout(() => {this.loader.hide(); }, 0 );
            })
        );
    }
}
