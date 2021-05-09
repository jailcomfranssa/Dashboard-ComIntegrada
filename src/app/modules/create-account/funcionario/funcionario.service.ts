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

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${environment.api}/auth/register`,funcionario).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))

    )
  }

  errorHandler(e: any): Observable<any>{
    this.msg.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
