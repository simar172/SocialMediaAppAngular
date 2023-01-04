import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AllPostService } from 'src/app/Services/AllPost/all-post.service';
import { CategoryServiceService } from 'src/app/Services/CategoryService/category-service.service';
import { LikeServiceService } from 'src/app/Services/LikeService/like-service.service';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';
import { PostServiceService } from 'src/app/Services/PostService/post-service.service';
import Swal from 'sweetalert2';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-categorywise-post',
  templateUrl: './categorywise-post.component.html',
  styleUrls: ['./categorywise-post.component.css'],
})
export class CategorywisePostComponent implements OnInit {
  puser: any = '';
  posts: any = '';
  userid: any = '';
  islogin: any = '';
  likedUsers: any = new Set();
  luser: any = [];
  cid: any = '';

  constructor(
    private acti: ActivatedRoute,
    private cserv: CategoryServiceService,
    private allPost: AllPostService,
    private lserv: LikeServiceService,
    private loserv: LoginServiceService,
    private pserv: PostServiceService,
    private ct: CategoriesComponent
  ) {}
  check: any = new BehaviorSubject<boolean>(false);
  ngOnInit(): void {
    this.userid = this.loserv.getUser()?.id;
    this.islogin = this.loserv.isLogin();
    this.acti.params.subscribe((p: Params) => {
      this.cid = p['cid'];
    });

    console.log(this.cid);

    this.cserv.cpost.subscribe((n: any) => {
      this.cserv.getPostByCategory(this.cid).subscribe((res: any) => {
        this.posts = res;

        this.posts.map((p: any) => {
          this.lserv.getUsersOfLikedPost(p.id).subscribe((res) => {
            this.likedUsers.add(res);
          });
        });
        this.check.subscribe((l: any) => {
          this.islogin = this.loserv.isLogin();
          this.userid = this.loserv.getUser()?.id;
          this.posts.map((p: any) => {
            this.lserv.getUsersOfLikedPost(p.id).subscribe((res) => {
              if (!this.likedUsers.has(res)) {
                this.likedUsers.add(res);
              }
            });
            this.lserv.getLikes(p.id).subscribe((l) => {
              p['lkn'] = l;
            });
            this.loserv.isLogin() &&
              this.lserv.isLiked(p.id, this.userid).subscribe((f) => {
                p['lkd'] = f;
              });
          });
        });
      });
    });
  }
  addLike(uid: any, pid: any) {
    this.lserv.addLike(uid, pid).subscribe((res) => {
      this.check.next(true);
    });
  }
  getlUsers(i: any) {
    this.check.next(true);
    this.puser = [];
    this.luser = Array.from(this.likedUsers);
    this.puser = this.luser[i];
    this.likedUsers.clear();
  }
  deletePost(pid: any) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        this.pserv.deletePostById(pid).subscribe((res) => {
          this.posts = this.posts.filter((p: any) => p.id != pid);
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
