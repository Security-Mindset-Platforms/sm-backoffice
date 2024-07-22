import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseConstantes } from '../../constantes/BaseConstantes';
import { AuthService } from '../../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public authService: AuthService,
    public router: Router) { }
  canActivate(next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = JSON.parse(localStorage.getItem(BaseConstantes.AUTH_LOCAL_STORAGE_NAME) as any);
    if (!user || user === null) {
      this.router.navigate([BaseConstantes.LOGIN_PAGE]);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
      this.router.navigate([BaseConstantes.LOGIN_PAGE]);
        return true
      }
    }
    return true
  }
}
