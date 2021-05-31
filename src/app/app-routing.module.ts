import { ApiPostComponent } from './modules/apicosmos/api-post/api-post.component';
import { ApiReadComponent } from './modules/apicosmos/api-read/api-read.component';
import { PedidosReadComponent } from './modules/pedido/pedidos-read/pedidos-read.component';
import { PedidosComponent } from './modules/pedido/pedidos/pedidos.component';
import { CategoriaReadComponent } from './modules/categoria/categoria-read/categoria-read.component';
import { CategoriaDeleteComponent } from './modules/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './modules/categoria/categoria-update/categoria-update.component';
import { CategoriaPostComponent } from './modules/categoria/categoria-post/categoria-post.component';
import { CategoriaComponent } from './modules/categoria/categoria/categoria.component';
import { FuncionarioDeleteComponent } from './modules/create-account/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './modules/create-account/funcionario-update/funcionario-update.component';
import { FuncionarioPostComponent } from './modules/create-account/funcionario-post/funcionario-post.component';
import { ProductUpdateComponent } from './modules/products/product-update/product-update.component';
import { PostsComponent } from './modules/products/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './modules/login/login.component';
import { CreateAccountComponent } from './modules/create-account/funcionario/create-account.component';
import { AuthGuard } from './modules/shared/auth.guard';
import { ProdutosComponent } from './modules/products/produtos/produtos.component';
import { ProductDeleteComponent } from './modules/products/product-delete/product-delete.component';



const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,

    children:[
      {
        path:'',
        component:DashboardComponent
      },

      //produto******
      {
        path: 'posts',
        component: PostsComponent
      },

      {
        path: 'produtos',
        component: ProdutosComponent
      },

      {
        path: 'produto/edit/:id',
        component: ProductUpdateComponent
      },

      {
        path:'produto/delete/:id',
        component: ProductDeleteComponent
      },

      //produtos de api externa*
      {
        path: 'produtoexterno',
        component: ApiReadComponent,

      },

       {
         path: 'pedirproduto/:cod',
         component: ApiPostComponent,
       },

      //funcionario*******

      {
        path:'creatConta',
        component: CreateAccountComponent
      },
      {
        path:'funcionario/post',
        component: FuncionarioPostComponent
      },

      {
        path:'funcionario/edit/:id',
        component: FuncionarioUpdateComponent
      },
      {
        path:'funcionario/delete/:id',
        component: FuncionarioDeleteComponent
      },
      //Categoria ******
      {
        path:'categoria',
        component:CategoriaComponent
      },
      {
        path: 'categoria/post',
        component:CategoriaPostComponent
      },
      {
        path:'categoria/edit/:id',
        component: CategoriaUpdateComponent
      },
      {
        path:'categoria/delete/:id',
        component:CategoriaDeleteComponent
      },
      {
        path:'categoria/creat',
        component:CategoriaReadComponent
      },

      //Pedidos

      {
        path:'pedido',
        component:PedidosComponent
      },
      {
        path:'pedido/list',
        component:PedidosReadComponent

      }





  ],
    canActivate:[AuthGuard]
  },
  {
    path: '',
    component:DefaultComponent,
    children:[

      {
        path: 'login',
        component: LoginComponent,

      },


    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
