import { Categoria } from './../../categoria/categoria/categoria.model';
import { ApiResult } from './../result.model';
import { DashboardService } from './../../dashboard.service';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.scss']
})
export class ApiPostComponent implements OnInit {
  product: ApiResult = {
    
    nome:'',
    codigo_ean13: '',
    peso: null,
    comprimento: null,
    altura: null,
    imagem: '',
    descricao: '',
    descricao_curta:'',
    preco: null,
    fabricante: '',
    categ_id: null,
    quant: null
  }

  inCategoria: Categoria = {
    id:null,
    nome:'',
  }

 

  result: any
  resultcateg: any

  constructor(private router:Router, private route: ActivatedRoute, private apiService: ApiService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const cod = this.route.snapshot.paramMap.get('cod')
    this.apiService.read().subscribe(Categoria =>{
      this.resultcateg = Categoria
     
      
      console.log(this.resultcateg);
      
    })

    this.apiService.getAll(cod).subscribe(api =>{
      this.result = api
      this.product.nome = this.result.description
      this.product.codigo_ean13 = this.result.gtin
      this.product.peso = this.result.gross_weight
      this.product.comprimento = this.result.length
      this.product.altura = this.result.height
      this.product.imagem = this.result.thumbnail
      this.product.descricao = this.result.ncm.full_description
      this.product.descricao_curta = this.result.description
      this.product.preco = this.result.avg_price
      this.product.fabricante = this.result.brand.name
      
      

      console.log(this.result);
      
      
    })
  }

  createProduct(): void{
    
    this.apiService.create(this.product).subscribe(()=>{
      this.apiService.showMessage('Produto Criado com Sucesso !!')
      this.router.navigate(['/produtos'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/produtoexterno']);

  }

}
