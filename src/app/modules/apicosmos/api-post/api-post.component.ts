import { DashboardService } from './../../dashboard.service';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.scss']
})
export class ApiPostComponent implements OnInit {

  result: any

  constructor(private router:Router, private route: ActivatedRoute, private apiService: ApiService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const cod = this.route.snapshot.paramMap.get('cod')
    this.apiService.getAll(cod).subscribe(api =>{
      this.result = api
      console.log(this.result);
    })
  }

}
