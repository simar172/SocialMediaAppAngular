import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.css'],
})
export class EnterOTPComponent implements OnInit {
  otp: any = '';
  constructor(private lserv: LoginServiceService, private rtr: Router) {}

  ngOnInit(): void {}
  verifyOTP() {
    this.lserv.verifyOTP(this.otp).subscribe((res) => {
      console.log(res);
      this.rtr.navigate(['/forgot/setPass'])
    });
  }
}
