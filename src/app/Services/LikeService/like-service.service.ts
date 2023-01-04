import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../AllPost/GlobalVari';

@Injectable({
  providedIn: 'root',
})
export class LikeServiceService {
  constructor(private http: HttpClient) {}
  addLike(uid: any, pid: any) {
    return this.http.put(`${baseUrl}/like/${uid}/${pid}`, null);
  }
  isLiked(pid: any, uid: any) {
    return this.http.get(`${baseUrl}/like/check/${pid}/${uid}`);
  }
  getLikes(pid: any) {
    return this.http.get(`${baseUrl}/like/${pid}`);
  }
  getUsersOfLikedPost(pid: any) {
    return this.http.get(`${baseUrl}/like/likedUser/${pid}`);
  }
}
