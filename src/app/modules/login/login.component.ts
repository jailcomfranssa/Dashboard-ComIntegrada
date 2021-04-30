import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_email:string
  log_password:string
  log_password_confirm:string
  reg_email:string
  reg_password:string
  reg_password_confirm:string
  
  register(){}
  login(){}

  constructor() { }

  ngOnInit(): void {
  }

}
