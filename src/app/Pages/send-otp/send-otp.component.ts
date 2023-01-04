import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css'],
})
export class SendOTPComponent implements OnInit {
  email: any = '';
  constructor(private Lserv: LoginServiceService, private rtr: Router) {}

  ngOnInit(): void {}
  verifyEmail() {
    localStorage.setItem('uname', this.email);
    this.Lserv.sendOTP(this.email).subscribe((res) => {
      console.log(res);
      this.rtr.navigate(['forgot', 'enterOTP']);
    });
  }
}
