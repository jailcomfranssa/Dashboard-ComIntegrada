import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any){
      const result = await this.http.post<any>(`${environment.api}/auth/login`,user).toPromise();
      if(result && result.token){
        console.log(result);
        window.localStorage.setItem('token', result.token);
        return true;
      }
      return false;

  }

  createAccount( account: any){
    return new Promise((resolve)=>{
      resolve(true);
    });

  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }
}
