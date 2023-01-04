import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, TitleStrategy } from '@angular/router';
import { CategoryServiceService } from 'src/app/Services/CategoryService/category-service.service';
import { PostServiceService } from 'src/app/Services/PostService/post-service.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  src: any = '';
  img: any = '';
  pid: any = '';
  postDet: any = {
    title: '',
    content: '',
    ctgry: '',
    imagename: '',
  };
  constructor(
    private cserv: CategoryServiceService,
    private pserv: PostServiceService,
    private act: ActivatedRoute
  ) {}
  ctgris: any = '';
  ngOnInit(): void {
    this.cserv.getALlCat().subscribe((res) => {
      this.ctgris = res;
    });
    this.act.params.subscribe((p: Params) => {
      this.pid = p['pid'];
      this.pserv.getPostByPid(this.pid).subscribe((data: any) => {
        console.log(data);
        this.postDet.title = data.title;
        this.postDet.content = data.content;
        this.postDet.ctgry = data.ct.id;
        this.postDet.imagename = data.imagename;
      });
    });
  }
  updatePost() {
    console.log(this.postDet);

    this.pserv
      .updateP(this.postDet, this.pid, this.postDet.ctgry)
      .subscribe((data: any) => {
        console.log(data);

        this.pserv
          .uploadPostPhoto(this.img, this.pid, data.u.email)
          .subscribe((res) => {
            console.log(res);
          });
      });
  }
  handlePimage(event: any) {
    if (event.target.files) {
      var filer = new FileReader();
      this.img = event.target.files[0];
      filer.readAsDataURL(event.target.files[0]);
      this.postDet.imagename = event.target.files[0].name;
      filer.onload = (event: any) => {
        this.src = event.target.result;
      };
    }
  }
}
