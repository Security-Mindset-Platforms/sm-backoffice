import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import moment from "moment";
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './localstorage.service';
import { PayLoadModel } from '../modeles/payload.model';
import { environment } from '../../../../environments/environment';
import { BaseConstantes } from '../constantes/BaseConstantes';
@Injectable({
    providedIn: 'root'
  })
export class JWTTokenService {
    secretKey = environment.secretKey;
    constructor( public router: Router, private localStorageService: LocalStorageService,private jwtHelper: JwtHelperService, private toastr: ToastrService){}
    GetTokenDecoded(token: string) {
        return this.jwtHelper.decodeToken(token);
    }
    getPayLoad(token: string): PayLoadModel {
        return <PayLoadModel>this.jwtHelper.decodeToken(token);
    }
    getTokenExpirationDate(token: string ): any {
        return  this.jwtHelper.getTokenExpirationDate(token);
    }
    isAuthenticated(token: string ): boolean {
        var payload: PayLoadModel= this.getPayLoad(token);
        return !this.jwtHelper.isTokenExpired(token);
    }
    getRoles(token: string) {
        // const data= (PayLoadModel) JSON.stringify(this.jwtHelper.decodeToken(token));
        // return this.jwtHelper.decodeToken(token).roles;
        return this.getPayLoad(token).roles;
    }
    getEmail(token: string) {
        return this.getPayLoad(token).email;
    }
    getDateDebut(token: string) {

        return this.getPayLoad(token).iat;
    }
    getDateExp(token: string) {

        return this.getPayLoad(token).exp;
    }
    getName(token: string) {

        return this.getPayLoad(token).name;
    }
    getTel(token: string) {

        return this.getPayLoad(token).tel;
    }
    getSurname(token: string) {

        return this.getPayLoad(token).surname;
    }
    getExpiration() {
        const expiration = localStorage.getItem("user") as any;
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    /**
     *
     * @param value Encrypt string (jwt, ...)
     * @returns
     */
    encrypt(value : string) : string{
        return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    }
    /**
     *
     * @param textToDecrypt Decrypt string (jwt, ...)
     * @returns
     */
    decrypt(textToDecrypt : string){
        return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }

}
