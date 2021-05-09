import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  navigateToCategoriaCreate(): void{
    this.router.navigate(['/categoria/post'])
  }

}
