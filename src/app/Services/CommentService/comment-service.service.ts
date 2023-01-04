import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import baseUrl from '../AllPost/GlobalVari';

@Injectable({
  providedIn: 'root',
})
export class CommentServiceService {
  
  constructor(private http: HttpClient) {}
  addComment(comment: any, uid: any, pid: any) {
    return this.http.post(`${baseUrl}/comment/create/${uid}/${pid}`, comment);
  }
}
