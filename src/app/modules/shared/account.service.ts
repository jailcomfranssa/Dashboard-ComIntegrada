import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  async login(user: any){
      const result = await this.http.post<any>(`${environment.api}/auth/login`,user).toPromise();
      if(result && result.token && result.is_user == 0){
        console.log(result);
        window.localStorage.setItem('token', result.token);
        window.localStorage.setItem('name', result.name);
        window.localStorage.setItem('id', result.user_id);
        window.localStorage.setItem('is_user',result.is_user)
        return true;
      }
      alert('Erro!! Email ou senha invalido');
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

  logout() {
    // remove user from local storage to log user out
    
    localStorage.removeItem("correnteUser");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("is_user");

    
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X',{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        
    })
}

  
}
