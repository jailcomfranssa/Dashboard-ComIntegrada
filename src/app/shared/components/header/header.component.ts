import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/modules/shared/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  correnteUser = localStorage.getItem("token")

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router, private accountService: AccountService) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  sair(): void{
    this.accountService.logout()
    this.router.navigate(['/login'])

  }



}