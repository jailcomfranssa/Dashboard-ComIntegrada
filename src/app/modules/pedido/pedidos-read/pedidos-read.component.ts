import { PedidoService } from './../pedidos/pedido.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


interface InPedido{
  id?: number;
  quantidade:number,

}

@Component({
  selector: 'app-pedidos-read',
  templateUrl: './pedidos-read.component.html',
  styleUrls: ['./pedidos-read.component.scss']
})
export class PedidosReadComponent implements OnInit {

  dataSource: MatTableDataSource<InPedido>
  inpedido: InPedido[] = [];
  columns: string[] = ['id','quantidade', 'nome', 'preco'];

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;


  constructor( private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.read().subscribe(pedido =>{
      this.inpedido = pedido
      console.log(this.inpedido);

      this.dataSource = new MatTableDataSource(this.inpedido);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
