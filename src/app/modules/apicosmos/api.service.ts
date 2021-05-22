import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResult } from './result.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apicosmos } from './apicosmos.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,  private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X',{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ?['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY

}

  getAll (cod: string): Observable<Apicosmos>  {
    return this.http.get<Apicosmos>(`https://api.cosmos.bluesoft.com.br/gtins/${cod}.json`, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        "X-Cosmos-Token" : "VxuRluBNWLQtsQUrBNViiA"
      })
    });
  }

  create(produto: ApiResult ): Observable<ApiResult>{
    return this.http.post<ApiResult>(`${environment.api}/produtos`,produto).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
    )

}
}
