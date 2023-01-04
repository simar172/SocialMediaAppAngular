import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LikeServiceService } from 'src/app/Services/LikeService/like-service.service';
import { PostServiceService } from 'src/app/Services/PostService/post-service.service';
import { LoginServiceService } from '../../../Services/LoginService/login-service.service';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit {
  uid: any = '';
  post: any = [];
  flag: any = '';
  constructor(
    private pserv: PostServiceService,
    private userv: LoginServiceService,
    private rtr: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rtr.params.subscribe((p: Params) => {
      this.uid = p['uid'];
    });
    this.pserv.getPostsByUser(this.uid).subscribe((data: any) => {
      this.post = data;
    });
  }
}
