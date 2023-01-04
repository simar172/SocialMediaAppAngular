import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginServiceService } from './Services/LoginService/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BlogAngular';
  constructor(private lserv: LoginServiceService, private rtr: Router) {}
  ngOnInit() {
    this.lserv.JWTcheck().subscribe((res) => {
      if (res == true) {
        localStorage.clear();
        this.lserv.isloggin.next(true);
        this.rtr.navigate(['']);
      }
    });
  }
}
