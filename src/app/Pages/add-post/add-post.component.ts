import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/Services/CategoryService/category-service.service';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';
import { PostServiceService } from 'src/app/Services/PostService/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  ctgris: any = '';
  img: any = '';
  src: any = '';
  postDet: any = {
    title: '',
    content: '',
    ctgry: '',
    imagename: '',
  };
  constructor(
    private cserv: CategoryServiceService,
    private pserv: PostServiceService,
    private lserv: LoginServiceService
  ) {}

  ngOnInit(): void {
    this.cserv.getALlCat().subscribe((res) => {
      this.ctgris = res;
    });
  }
  addPost() {
    console.log(this.postDet);

    this.pserv
      .addPost(this.postDet, this.lserv.getUser().id, this.postDet.ctgry)
      .subscribe((res: any) => {
        console.log(res);

        this.pserv
          .uploadPostPhoto(this.img, res.id, res.u.email)
          .subscribe((data) => {
            console.log(data);
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
