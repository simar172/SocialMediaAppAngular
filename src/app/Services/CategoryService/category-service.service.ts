import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  baseurl: any = 'http://localhost:8080';
  public cpost: any = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  getALlCat() {
    return this.http.get(`${this.baseurl}/category/`);
  }

  getPostByCategory(cid: any) {
    return this.http.get(`${this.baseurl}/api/category/${cid}/posts`);
  }
}
