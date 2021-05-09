import { CategoriaUpdateComponent } from './../../modules/categoria/categoria-update/categoria-update.component';
import { CategoriaReadComponent } from './../../modules/categoria/categoria-read/categoria-read.component';
import { CategoriaPostComponent } from './../../modules/categoria/categoria-post/categoria-post.component';
import { CategoriaDeleteComponent } from './../../modules/categoria/categoria-delete/categoria-delete.component';
import { CategoriaComponent } from './../../modules/categoria/categoria/categoria.component';
import { FuncionarioDeleteComponent } from './../../modules/create-account/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './../../modules/create-account/funcionario-update/funcionario-update.component';
import { FuncionarioPostComponent } from './../../modules/create-account/funcionario-post/funcionario-post.component';
import { FuncionarioReadComponent } from './../../modules/create-account/funcionario-read/funcionario-read.component';
import { ProductUpdateComponent } from './../../modules/products/product-update/product-update.component';
import { httpInterceptorProviders } from './../../http-interceptors/index';
import { DashboardService } from './../../modules/dashboard.service';
import { MatDividerModule } from '@angular/material/divider';

import { PostsComponent } from '../../modules/products/posts/posts.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule}from '@angular/material/sidenav'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';

import { LoginComponent } from 'src/app/modules/login/login.component';
import { CreateAccountComponent } from 'src/app/modules/create-account/funcionario/create-account.component';
import {MatTabsModule}from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule}from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatIconModule}from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { ProdutosComponent } from 'src/app/modules/products/produtos/produtos.component';
import {MatSnackBarModule}from '@angular/material/snack-bar'
import { ProdutosReadComponent } from 'src/app/modules/products/produtos-read/produtos-read.component';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductDeleteComponent } from 'src/app/modules/products/product-delete/product-delete.component';



@NgModule({

  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LoginComponent,
    CreateAccountComponent,
    ProdutosComponent,
    ProdutosReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    FuncionarioReadComponent,
    FuncionarioPostComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    CategoriaComponent,
    CategoriaDeleteComponent,
    CategoriaPostComponent,
    CategoriaReadComponent,
    CategoriaUpdateComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSortModule,
    MatMenuModule,
    MatGridListModule,
   
   
    
  ],
  providers:[
    DashboardService,
    httpInterceptorProviders,
    Component,
    
    
  ]
})
export class DefaultModule { }
