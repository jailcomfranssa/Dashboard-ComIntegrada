import { DashboardService } from './../../dashboard.service';
import { FuncionarioService } from './../funcionario/funcionario.service';
import { Router } from '@angular/router';
import { UserModel } from './user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-post',
  templateUrl: './funcionario-post.component.html',
  styleUrls: ['./funcionario-post.component.scss']
})
export class FuncionarioPostComponent implements OnInit {

  usuario: UserModel={
    
    name:'',
    email:'',
    password:'',
    nascimento: null,
    tipo: '',
    documento:'',
    is_user:0 

  }

  constructor(private router: Router, private funcionarioService: FuncionarioService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
   
  }

  createUser(): void{
    this.funcionarioService.create(this.usuario).subscribe(()=>{
      this.dashboardService.showMessage('Produto Criado com Sucesso !!')
      this.router.navigate(['/creatConta'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/creatConta'])
    
  }

}
