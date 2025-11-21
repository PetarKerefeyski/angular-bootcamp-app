import {PostService} from '../post.service';
import {Component} from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <button (click)="load()">Load Posts</button>
    <pre>{{ posts | json }}</pre>
  `
})
export class SubjectComponent {
  posts: any;

  constructor(readonly postService: PostService) {
    this.postService.post$.subscribe(data =>
      this.posts = data
    );
  }

  load() {
    this.postService.fetchPosts();
  }
}
