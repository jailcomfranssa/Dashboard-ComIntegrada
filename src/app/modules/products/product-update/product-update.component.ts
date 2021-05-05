import { ActivatedRoute, Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import{Component} from '@angular/core';
import { ProductService } from '../produtos/product.service';
import { Product } from '../produtos/produto.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
        this.product = product;
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Atualizado com Sucesso!!');
      this.router.navigate(["/produtos"]);
    })
   

  }

  cancel(): void{
    this.router.navigate(['/produtos']);

  }

}
