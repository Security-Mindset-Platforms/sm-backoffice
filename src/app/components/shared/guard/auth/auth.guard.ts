import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseConstantes } from '../../constantes/BaseConstantes';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next,url);
  }
  checkUserLogin(route: ActivatedRouteSnapshot,state: string): boolean {
    const userRole = this.authService.getRole();
    if(userRole !== null )
    {

      if (this.authService.isLoggedIn()) {
        if (route.data['role'] && userRole.indexOf(route.data['role']) !== -1) {

          return true;
        }
        this.router.navigate([BaseConstantes.LOGIN_PAGE],{ queryParams: { returnUrl: state }});
        return false;
      }
      else {
        this.router.navigate([BaseConstantes.LOGIN_PAGE],{ queryParams: { returnUrl: state }});
        return false;
      }
    }
    else {
      this.router.navigate([BaseConstantes.LOGIN_PAGE],{ queryParams: { returnUrl: state }});
      return false;
    }
  }
}
