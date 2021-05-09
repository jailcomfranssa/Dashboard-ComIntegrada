import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  navigateToFuncionarioCreate(): void{
    this.router.navigate(['/funcionario/post'])
  }

}
