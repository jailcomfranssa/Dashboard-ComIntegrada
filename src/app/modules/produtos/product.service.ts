import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product } from './produto.model';

@Injectable({
    providedIn: 'root'

})
export class ProductService{
    constructor( private snackBar: MatSnackBar, private http: HttpClient){}

    showMessage(msg: string): void{
        this.snackBar.open(msg, 'X',{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        })
    }

    create(produto: Product ): Observable<Product>{
        return this.http.post<Product>(`${environment.api}/produtos`,produto)

    }

}