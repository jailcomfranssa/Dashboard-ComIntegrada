import { PostsComponent } from './modules/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './modules/login/login.component';
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { AuthGuard } from './modules/shared/auth.guard';


const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,

    children:[
      {
        path:'',
        component:DashboardComponent
      }, 
      {
        path: 'posts',
        component: PostsComponent
      },
     
     
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
      
      {
        path:'creatConta',
        component: CreateAccountComponent
      }

      
      
     
      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
