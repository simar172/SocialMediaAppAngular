import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  uid: any = '';
  user: any = '';
  isLogin: any = '';
  cuid: any = '';
  flwr: any = '';
  flwng: any = '';
  isflwng: any = '';
  constructor(
    private userv: LoginServiceService,
    private actir: ActivatedRoute
  ) {}
  check: any = new BehaviorSubject<boolean>(false);
  ngOnInit(): void {
    // console.log(this.userv.getUser());
    this.isLogin = this.userv.isLogin();
    this.cuid = this.userv.getUser()?.id;
    this.actir.params.subscribe((p: Params) => {
      this.uid = p['uid'];
      this.check.subscribe((res: any) => {
        this.userv.getUserFollowers(this.uid).subscribe((res: any) => {
          this.flwr = res;
        });
        this.userv.getUserFollowing(this.uid).subscribe((data: any) => {
          console.log(data);
          this.flwng = data;
        });
        this.userv.getParticularUser(this.uid).subscribe((res) => {
          this.user = res;
        });
        this.userv.isFollowing(this.cuid, this.uid).subscribe((res) => {
          console.log(res);
          this.isflwng = res;
        });
      });
    });
  }
  fUser(cuid: any, uid: any) {
    this.userv.followUser(cuid, uid).subscribe((res) => {
      this.check.next(true);
      console.log(res);
    });
  }
}
