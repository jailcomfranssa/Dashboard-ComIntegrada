import { Component, OnInit } from '@angular/core';
import { ProductService } from '../produtos/product.service';
import { Product } from '../produtos/produto.model';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.scss']
})
export class ProdutosReadComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products);
    })
  }

}
