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
    
    nome:"teste",
    codigo_ean13: "test",
    peso: 1,
    comprimento: 1,
    altura: 1,
    imagem: "test",
    descricao: "test",
    descricao_curta:"test",
    preco: 1,
    fabricante: "test",
    categ_id: 1,
    quant: 1
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
