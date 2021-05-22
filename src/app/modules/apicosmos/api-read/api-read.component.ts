import { Apicosmos } from './../apicosmos.model';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

interface Externa {
  id?: number;
  ean: string;
}
@Component({
  selector: 'app-api-read',
  templateUrl: './api-read.component.html',
  styleUrls: ['./api-read.component.scss']
})
export class ApiReadComponent implements OnInit {
  apicosmo: Apicosmos ={
    ean13:""
  }

  externa: string;
  
  constructor(private apiservice: ApiService, private router:Router) {

  }

  ngOnInit(): void {
    
  }

  


 

}

