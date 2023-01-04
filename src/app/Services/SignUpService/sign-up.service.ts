import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../AllPost/GlobalVari';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private http: HttpClient;
  constructor(private httpback: HttpBackend) {
    this.http = new HttpClient(this.httpback);
  }
  signUp(data: any) {
    return this.http.post(`${baseUrl}/jwt/newUser`, data);
  }
  uploadProfile(img: any, uid: any, uname: any) {
    let frmdata = new FormData();
    frmdata.append('image', img);
    frmdata.set('Accept', 'application/json');

    return this.http.put(`${baseUrl}/profile/image/${uid}/${uname}`, frmdata);
  }
}
