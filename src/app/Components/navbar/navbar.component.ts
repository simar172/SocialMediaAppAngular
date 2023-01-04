import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  islin: any = false;
  user: any = '';
  username: any = '';
  fulluser: any = '';
  constructor(private lserv: LoginServiceService, private rtr: Router) {}

  ngOnInit(): void {
    this.islin = this.lserv.isLogin();
    if (this.lserv.isLogin()) {
      this.user = this.lserv.getUser()?.name;
      this.fulluser = this.lserv.getUser();
    }

    this.lserv.isloggin.asObservable().subscribe(() => {
      this.islin = this.lserv.isLogin();
      this.user = this.lserv.getUser().name;
      this.fulluser = this.lserv.getUser();
    });
  }
  onLogout() {
    this.lserv.logOut();
    this.islin = false;
    console.log(this.fulluser);
    this.rtr.navigate(['']);
    window.location.reload();
  }
}
