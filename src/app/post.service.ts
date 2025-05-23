import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  private postSubject = new Subject<any>();
  post$ = this.postSubject.asObservable();

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => this.postSubject.next(data)); // emit to subject
  }
}
