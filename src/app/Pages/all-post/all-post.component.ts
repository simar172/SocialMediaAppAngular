import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { AllPostService } from 'src/app/Services/AllPost/all-post.service';
import { LikeServiceService } from 'src/app/Services/LikeService/like-service.service';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';
import { BehaviorSubject } from 'rxjs';
import { PostServiceService } from 'src/app/Services/PostService/post-service.service';
import Swal from 'sweetalert2';
import { CommentServiceService } from 'src/app/Services/CommentService/comment-service.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
})
export class AllPostComponent implements OnInit {
  comment: any = {
    comment: '',
  };
  allcomments: any = [];
  puser: any = '';
  posts: any = '';
  userid: any = '';
  islogin: any = '';
  constructor(
    private cservice: CommentServiceService,
    private allPost: AllPostService,
    private lserv: LikeServiceService,
    private loserv: LoginServiceService,
    private pserv: PostServiceService
  ) {}

  check: any = new BehaviorSubject<boolean>(false);
  commentflag: any = new BehaviorSubject<boolean>(false);
  likedUsers: any = new Set();
  luser: any = [];

  ngOnInit(): void {
    this.userid = this.loserv.getUser()?.id;

    this.islogin = this.loserv.isLogin();
    this.allPost.getAllPost(this.userid).subscribe((res: any) => {
      this.posts = res.content;

      this.check.subscribe((l: any) => {
        this.islogin = this.loserv.isLogin();
        this.userid = this.loserv.getUser()?.id;
        this.posts.map((p: any,index:any) => {
          this.commentflag.subscribe(() => {
          

            this.allcomments[index]=p.li;
            this.lserv.getUsersOfLikedPost(p.id).subscribe((res: any) => {
              if (!this.likedUsers.has(res)) {
                this.likedUsers.add(res);
              }
            });
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
  }
  acomment(puid: any, uid: any) {
    this.cservice.addComment(this.comment, puid, uid).subscribe((res) => {
      this.commentflag.next(true);
    });
    console.log(this.allcomments);
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
