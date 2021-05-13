import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   correnteUser = localStorage.getItem("token")
   usuario = window.localStorage.getItem('name')

  constructor() {

  }


  ngOnInit(): void {


  }

  correnteUsuario(){


  }

}
