import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../AllPost/GlobalVari';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor(private http: HttpClient) {}
  addPost(data: any, uid: any, cid: any) {
    return this.http.post(`${baseUrl}/api/user/${uid}/category/${cid}`, data);
  }

  uploadPostPhoto(img: any, pid: any, uname: any) {
    let frmdata = new FormData();
    frmdata.append('image', img);

    return this.http.put(`${baseUrl}/api/post/store/${pid}/${uname}`, frmdata, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    });
  }

  getPostByPid(pid: any) {
    return this.http.get(`${baseUrl}/api/post/${pid}`);
  }
  getPostsByUser(uid: any, cuid: any) {
    return this.http.get(`${baseUrl}/api/user/${uid}/posts/${cuid}`);
  }

  deletePostById(pid: any) {
    return this.http.delete(`${baseUrl}/api/post/${pid}`);
  }
  updateP(post: any, pid: any, cid: any) {
    return this.http.put(`${baseUrl}/api/updatePost/${pid}/${cid}`, post);
  }
}
