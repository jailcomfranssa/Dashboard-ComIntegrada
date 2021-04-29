import { PostsComponent } from './modules/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';


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
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
