import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CategoryServiceService } from 'src/app/Services/CategoryService/category-service.service';
import { Injectable } from '@angular/core';
import { CategorywisePostComponent } from '../categorywise-post/categorywise-post.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CategoriesComponent implements OnInit {
  flag = false;

  constructor(private ctServ: CategoryServiceService, private rtr: Router) {}
  allCtgry: any = '';
  ngOnInit(): void {
    this.ctServ.getALlCat().subscribe((res: any) => {
      this.allCtgry = res;
    });
  }

  ctPost(cid: any) {
    this.ctServ.cpost.next(true);
    this.rtr.navigate(['/category/' + cid]);
  }
}
