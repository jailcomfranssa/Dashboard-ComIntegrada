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
  externa: string;
  constructor(private apiservice: ApiService) {

  }

  ngOnInit(): void {
    this.apiservice.getAll().subscribe(api => {
      console.log(api);

    })
  }

}

