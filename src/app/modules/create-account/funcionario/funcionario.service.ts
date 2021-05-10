import { UserModel } from './../funcionario-post/user.model';
  
import { EMPTY, Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';
import { DashboardService } from './../../dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor( private http: HttpClient, private msg: DashboardService) { }

  errorHandler(e: any): Observable<any>{
    this.msg.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
  create(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${environment.api}/auth/register`,user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))

    )

  }

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${environment.api}/enderecos`);
  }


 

 
}