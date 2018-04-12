import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted request ... ');

    // TODO: add real stuff...
    const authReq = req.clone({headers: req.headers});

    console.log('Sending request with new header now ...');

    return next.handle(authReq)
      .catch((error, caught) => {
        console.log('Error Occurred');
        console.log(error);
        return Observable.throw(error);
      }) as any;
  }
}
