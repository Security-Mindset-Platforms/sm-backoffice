
import { Injectable } from '@angular/core';
import { Observable,  Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JWTTokenService } from './jwt.service';
import { LocalStorageService } from './localstorage.service';
import { ApiResultModel } from '../modeles/api-result.model';
import { BaseConstantes } from '../constantes/BaseConstantes';
import { LoginModel } from '../modeles/login.model';
import { CollabModel } from '../modeles/collab.model';
import { UnloggedUserChangePasswordModel } from '../modeles/unloggedUser-change-password.model';
import { AuthentificationEndPointsURI } from './AuthentificationEndPointsURI';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 subscriptions: Subscription[] = [];
  vheaders = new HttpHeaders(
  {
      //'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
  });
  options = { headers: this.vheaders };
  isLogin = false;
  roleAs: string[]=[];
  constructor(private router: Router, private httpClient: HttpClient,  private jwtServices: JWTTokenService, private localStorageService: LocalStorageService) {

  }
  loginUser(data: LoginModel) : Observable<ApiResultModel>  {
    return this.httpClient
    .post<ApiResultModel>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_LOGIN_USER , data, this.options);
  }
  createCollab(data: CollabModel) {

    return this.httpClient
    .post<ApiResultModel>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_LOGIN_SIGNUP , data, this.options);
  }
  accountStats(){
    return this.httpClient
    .get<ApiResultModel>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_ACCOUNTS_STATS , this.options);
  }

  enableNewCount(token: string)
  {
    return this.httpClient
    .put<ApiResultModel>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_ENABLE_NEW_COUNT+token , this.options);
  }
  passwordForgot(data: any) {

    return this.httpClient
    .post<any>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_PASSWORD_FORGOT , data, this.options);
  }
  isValidToken(token: string){
    return this.httpClient
    .get<any>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_IS_VALID_TOKEN+token, this.options);
  }

  resetPassword(data: UnloggedUserChangePasswordModel) {

    return this.httpClient
    .put<any>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_RESET_PASSWORD , data, this.options);
  }

  refreshSession(token: string) {
    return this.httpClient
    .put<any>(environment.urlAPi+environment.BASE_URI+AuthentificationEndPointsURI.ENDPOINT_REFRESH_SESSION , token, this.options)
    .subscribe(
      list => {
        if (list.code === 200) {
            var user = {
              token: this.jwtServices.encrypt(list.data.token),
              refreshToken: this.jwtServices.encrypt(list.data.refreshToken),
            }
            this.localStorageService.set(BaseConstantes.AUTH_LOCAL_STORAGE_NAME, JSON.stringify(user));
            // TODO toastr
            //this.router.navigate([BaseConstantes.DEFAULT_PAGE]);
        }
        else
        {
           // this.alertService.error(list.message);
        }
       },
       error => {
        //  this.alertService.error(error.error.message);
        console.log(error);
        }

    );
  }

  logout() {
    this.localStorageService.remove(BaseConstantes.AUTH_LOCAL_STORAGE_NAME);
    location.reload()
    //this.router.navigate([BaseConstantes.LOGIN_PAGE]);
  }
  isLoggedIn() {
    var data = this.getStorageData();
    if( data !== null){
      return this.jwtServices.isAuthenticated(data.token);
    }
    else {
     return false
    }
  }

  getToken(){
    var data = this.getStorageData();
    if( data !== null){
      return data.token;
    }
    else {
     return null
    }
  }
  getDateExpiration(){
    return this.jwtServices.getTokenExpirationDate(this.getToken() as any)
  }
  getRole() {
    var data = this.getStorageData();
    if( data !== null){
      this.roleAs = this.jwtServices.getRoles(data.token) as any;
      return this.roleAs;
    }
    else {
      return null;
    }

  }
  getStorageData(){
    var data = this.localStorageService.get(BaseConstantes.AUTH_LOCAL_STORAGE_NAME);
    if (data !== null) {

          var dataEncrypted = JSON.parse(data);
          var user = {
            token: this.jwtServices.decrypt(dataEncrypted.token),
            refreshToken: this.jwtServices.decrypt(dataEncrypted.refreshToken),
          };
         return user;
    } else {
      return null;
    }

  }



}
