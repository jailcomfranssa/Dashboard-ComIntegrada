import { Product } from './../produtos/produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../produtos/product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  product: Product = {
    
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

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Criado com Sucesso !!')
      this.router.navigate(['/produtos'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/produtos'])
    
  }

}
