import { DashboardService } from './../../dashboard.service';
import { CategoriaService } from './../categoria/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from './../categoria/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-post',
  templateUrl: './categoria-post.component.html',
  styleUrls: ['./categoria-post.component.scss']
})
export class CategoriaPostComponent implements OnInit {

  categoria: Categoria = {
    nome:'',
  }

  constructor(private router: Router, private categoriaService: CategoriaService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  createCategoria(): void{
    this.categoriaService.create(this.categoria).subscribe(()=>{
      this.dashboardService.showMessage('Categoria Criado com Sucesso !!')
      this.router.navigate(['/categoria'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/categoria'])
    
  }

}
