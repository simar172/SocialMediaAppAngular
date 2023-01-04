import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';
@Injectable()
export class DefaultIntercept implements HttpInterceptor {
  constructor(private lserv: LoginServiceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.lserv.getToken();
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,

        'Access-Control-Allow-Origin': '*',
      }),
    });
    return next.handle(authReq);
  }
}
export const DefInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DefaultIntercept,
  multi: true,
};
