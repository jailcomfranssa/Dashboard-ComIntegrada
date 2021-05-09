import { CategoriaService } from './../categoria/categoria.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


interface InCategoria{
  id?: number;
  nome:string,

}

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.scss']
})
export class CategoriaReadComponent implements OnInit {

  dataSource: MatTableDataSource<InCategoria>
  inCategoria: InCategoria[] = [];
  columns: string[] = ['id','nome','acao'];

  
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor( private categoriaservice: CategoriaService) { }

  ngOnInit(): void {

    this.categoriaservice.read().subscribe(categoria =>{
      this.inCategoria = categoria
      console.log(this.inCategoria);

      this.dataSource = new MatTableDataSource(this.inCategoria);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
