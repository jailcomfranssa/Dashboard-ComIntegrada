import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password:''
  }
  
  constructor(private accountService: AccountService , private router: Router) { }

  ngOnInit(): void {
    
  }

  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login);
      console.log(`Login Efetuado: ${result}`);
      this.router.navigate(['']);

    }catch (error){
      
      this.accountService.showMessage('Erro no Login')
      
      console.log(error);

    }
  }

}
