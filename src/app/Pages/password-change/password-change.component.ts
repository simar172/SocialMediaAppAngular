import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css'],
})
export class PasswordChangeComponent implements OnInit {
  pswd: any = {
    pass: '',
    conf: '',
    uname: '',
  };
  pass: any = '';
  uname: any = '';

  constructor(private lserv: LoginServiceService) {}

  ngOnInit(): void {}
  changePass() {
    console.log(localStorage.getItem('uname'));

    this.uname = localStorage.getItem('uname');
    this.lserv.changePass(this.pass, this.uname).subscribe((res) => {
      console.log(res);
      localStorage.clear();
    });
  }
}
