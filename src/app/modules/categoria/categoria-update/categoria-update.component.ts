import { DashboardService } from './../../dashboard.service';
import { CategoriaService } from './../categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from './../categoria/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.scss']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria

  constructor(private router: Router, private route: ActivatedRoute, private categoriaService: CategoriaService,private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoriaService.readById(id).subscribe(categoria =>{
        this.categoria = categoria;
    });
  }

  updateProduct(): void{
    this.categoriaService.update(this.categoria).subscribe(() =>{
      this.dashboardService.showMessage('Categoria Atualizado com Sucesso!!');
      this.router.navigate(["/categoria"]);
    })
  }

  cancel(): void{
    this.router.navigate(['/categoria']);

  }

}
