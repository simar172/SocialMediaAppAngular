import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css'],
})
export class ForgotPassComponent implements OnInit {
  email: any = '';
  constructor(private Lserv: LoginServiceService, private rtr: Router) {}

  ngOnInit(): void {}
  verifyEmail() {
    this.rtr.navigate(['forgot', 'enterOTP']);
    // this.Lserv.sendOTP(this.email).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
