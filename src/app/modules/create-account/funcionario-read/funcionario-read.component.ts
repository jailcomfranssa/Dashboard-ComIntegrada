import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FuncionarioService } from './../funcionario/funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface InFuncionario{
    id?: number,
    rua: string,
    numero: string,
    complemento:string,
    cidade:string,
    estado: string,
    bairro:string,
    user_id:number

}

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss']
})

export class FuncionarioReadComponent implements OnInit {

  dataSource: MatTableDataSource<InFuncionario>
  inFuncionario: InFuncionario[] = [];
  columns: string[] = ['id','rua','cidade', 'nome', 'email'];

  
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    
    this.funcionarioService.read().subscribe(funcionario =>{
      this.inFuncionario = funcionario
      console.log(this.inFuncionario);

      this.dataSource = new MatTableDataSource(this.inFuncionario);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

    
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}