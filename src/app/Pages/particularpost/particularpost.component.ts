import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommentServiceService } from 'src/app/Services/CommentService/comment-service.service';
import { PostServiceService } from 'src/app/Services/PostService/post-service.service';

@Component({
  selector: 'app-particularpost',
  templateUrl: './particularpost.component.html',
  styleUrls: ['./particularpost.component.css'],
})
export class ParticularpostComponent implements OnInit {
  userRoute: any = '';
  particularPost: any = '';
  allcomments: any = [];
  comment: any = {
    comment: '',
  };
  constructor(
    private actiroute: ActivatedRoute,
    private pservice: PostServiceService,
    private cservice: CommentServiceService
  ) {}
  commentflag: any = new BehaviorSubject<boolean>(false);
  ngOnInit(): void {
    this.commentflag.subscribe((l: any) => {
      console.log(l);
    });
    this.actiroute.params.subscribe((p: Params) => {
      this.userRoute = p['pid'];
    });
    this.commentflag.subscribe(() => {
      this.pservice.getPostByPid(this.userRoute).subscribe((data: any) => {
        console.log(data.li);
        this.allcomments = data.li;
        this.particularPost = data;
      });
    });
  }
  acomment() {
    this.cservice
      .addComment(this.comment, this.particularPost.u.id, this.userRoute)
      .subscribe((res) => {
        console.log(res);
        this.commentflag.next(true);
      });
  }
}
