import { DashboardService } from './../../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../categoria/categoria.service';
import { Categoria } from './../categoria/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.scss']
})
export class CategoriaDeleteComponent implements OnInit {
  categoria: Categoria;

  constructor( private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoriaService.readById(id).subscribe(categoria =>{
      this.categoria = categoria;
    })
  }

  deleteCategoria(): void{
    this.categoriaService.delete(this.categoria.id).subscribe(() =>{
      this.dashboardService.showMessage('Categoria Excluido !!!');
      this.router.navigate(['/categoria']);
    })

  }

  cancel(): void{
    this.router.navigate(['/categoria']);

  }

}
