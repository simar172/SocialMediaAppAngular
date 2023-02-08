import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from '../AllPost/GlobalVari';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  baseurl: any = 'http://localhost:8080';
  public isloggin = new Subject<boolean>();
  constructor(private http: HttpClient) {}
  login(ldetails: any) {
    return this.http.post(`${this.baseurl}/jwt/login`, ldetails);
  }
  setToken(token: any) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  isLogin() {
    if (localStorage.getItem('token') != null) return true;
    return false;
  }

  logOut() {
    localStorage.clear();
  }
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser() {
    let user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    } else return null;
  }
  getProfileImage(imagename: any, uname: any) {
    return this.http.get(`${this.baseurl}/profile/image/${imagename}/${uname}`);
  }
  getParticularUser(uid: any) {
    return this.http.get(`${this.baseurl}/${uid}`);
  }
  JWTcheck() {
    return this.http.get(`${baseUrl}/api/jwc`);
  }
  sendOTP(uname: any) {
    return this.http.post(`${baseUrl}/forgot/${uname}`, null);
  }
  verifyOTP(otp: any) {
    return this.http.post(`${baseUrl}/checkOTP/`, otp);
  }
  changePass(pass: any, uname: any) {
    return this.http.put(`${baseUrl}/userPass/${uname}`, pass);
  }

  followUser(cuid: any, uid: any) {
    return this.http.post(`${baseUrl}/flw/conf/${cuid}/${uid}`, null);
  }
  getUserFollowers(uid: any) {
    return this.http.get(`${baseUrl}/flw/user/flwrs/${uid}`);
  }
  getUserFollowing(uid: any) {
    return this.http.get(`${baseUrl}/flw/user/flwng/${uid}`);
  }

  isFollowing(uid: any, profileId: any) {
    return this.http.get(`${baseUrl}/flw/user/isflwng/${uid}/${profileId}`);
  }
  setPrivacy(uid: any) {
    return this.http.put(`${baseUrl}/private/${uid}`, null);
  }
}
