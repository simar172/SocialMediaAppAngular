import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ldetails: any = {
    username: '',
    password: '',
  };
  constructor(private lserv: LoginServiceService, private navi: Router) {}

  ngOnInit(): void {}
  onLogin() {
    this.lserv.login(this.ldetails).subscribe((res: any) => {
      console.log(res);
      this.lserv.setToken(res.token);
      this.lserv.setUser(res.u);
      this.lserv.isloggin.next(true)
      this.navi.navigate(['/', 'user']);
    });
  }
}
