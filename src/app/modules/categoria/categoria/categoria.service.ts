import { environment } from './../../../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { DashboardService } from './../../dashboard.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private msg: DashboardService, private http: HttpClient) { }

  errorHandler(e: any): Observable<any>{
    this.msg.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  create(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(`${environment.api}/categs`,categoria).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))

    )

  }
  read(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.api}/categs`);
  }

  readById(id: string): Observable<Categoria>{
    return this.http.get<Categoria>(`${environment.api}/categs/${id} `)

  }

  update(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${environment.api}/categs/${categoria.id}`,categoria)

  }

  delete(id: number): Observable<Categoria>{
    return this.http.delete<Categoria>(`${environment.api}/categs/${id}`);
  }

}
