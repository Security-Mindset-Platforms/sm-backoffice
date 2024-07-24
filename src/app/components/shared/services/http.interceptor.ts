import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../../environments/environment';
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor( private authService: AuthService) { }
    intercept(req: HttpRequest<unknown>, next: HttpHandler) :Observable<HttpEvent<unknown>>{
      //const token = this.authService.getToken();
      console.log("ok");
      req = req.clone({
        url:  req.url,
        setHeaders: {
          'API-KEY': environment.apiKey,
          // Authorization: `Bearer ${token}`
          Authorization: `Bearer `+ environment.jwt
        }
      });
      return next.handle(req);
    }
  }
