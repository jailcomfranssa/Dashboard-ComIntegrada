import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apicosmos } from './apicosmos.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAll (): Observable<Apicosmos>  {
    return this.http.get<Apicosmos>("https://api.cosmos.bluesoft.com.br/gtins/7896027531848.json", {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        "X-Cosmos-Token" : "VxuRluBNWLQtsQUrBNViiA"
      })
    });
  }
}
