import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseConstantes } from '../constantes/BaseConstantes';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next);
  }
  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    const userRole = this.authService.getRole();
    if(userRole !== null )
    {
      this.router.navigate([BaseConstantes.DEFAULT_PAGE]);
      return false;
    }
    else {
      return true;
    }
  }
}
