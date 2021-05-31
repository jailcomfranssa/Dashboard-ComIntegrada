import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../produtos/product.service';
import { Product } from '../produtos/produto.model';
import { MatSort } from '@angular/material/sort';




interface InProducts{
    id?: number;
    nome:string,
    codigo_ean13: string,
    descricao: string,
    preco: number,
    fabricante: string,
    categ_id: number,
    quant: number,
    
}

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.scss']
})
export class ProdutosReadComponent implements OnInit {

  

  dataSource: MatTableDataSource<InProducts>;
  inProducts: InProducts[] = [];
  columns: string[] = ['id','nome','preco','espc','quant','descricao_curta','fabricante','categ_id','acao'];

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private productService: ProductService) { 

  }


  ngOnInit(): void {
    

    this.productService.read().subscribe(products =>{
      this.inProducts = products
      console.log(this.inProducts);

      this.dataSource = new MatTableDataSource(this.inProducts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
    
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

}
