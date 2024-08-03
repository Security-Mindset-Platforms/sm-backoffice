import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { from, mergeMap, Observable } from 'rxjs';
import { AuthService} from './auth.service'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("authInfotoken")
    return from(this.authService.getAuthInfo()).pipe(
      mergeMap(authInfo => {
        if (authInfo.token) {
         
          const clonedRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${authInfo.token}`
            }
          });
          return next.handle(clonedRequest);
        }
        return next.handle(req);
      })
    );
  }
}
