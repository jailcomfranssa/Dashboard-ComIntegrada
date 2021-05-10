import { environment } from './../../../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { DashboardService } from './../../dashboard.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from './pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private msg: DashboardService, private http: HttpClient) { }


  errorHandler(e: any): Observable<any>{
    this.msg.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${environment.api}/pedido_detalhes`);
  }
}
