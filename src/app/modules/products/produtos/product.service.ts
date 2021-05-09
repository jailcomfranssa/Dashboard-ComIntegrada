

import { EMPTY, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product } from './produto.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'

})
export class ProductService{
    constructor( private snackBar: MatSnackBar, private http: HttpClient){}

    showMessage(msg: string, isError: boolean = false): void{
        this.snackBar.open(msg, 'X',{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ?['msg-error'] : ['msg-success']
        })
    }

    create(produto: Product ): Observable<Product>{
        return this.http.post<Product>(`${environment.api}/produtos`,produto).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        )

    }

    errorHandler(e: any): Observable<any>{
        this.showMessage('Ocorreu um erro!', true);
        return EMPTY

    }

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.api}/produtos`);
    }

    readById(id: string): Observable<Product>{
        return this.http.get<Product>(`${environment.api}/produtos/${id} `)

    }

    update(product: Product): Observable<Product>{
        return this.http.put<Product>(`${environment.api}/produtos/${product.id}`,product)

    }

    delete(id: number): Observable<Product>{
        return this.http.delete<Product>(`${environment.api}/produtos/${id}`);
    }

}