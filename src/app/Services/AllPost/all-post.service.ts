import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllPostService {
  baseUrl: any = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  getAllPost(uid: any) {
    if (uid != undefined) {
      return this.http.get(`${this.baseUrl}/api/all/${uid}`);
    }
    return this.http.get(`${this.baseUrl}/api/all/0`);
  }
}
