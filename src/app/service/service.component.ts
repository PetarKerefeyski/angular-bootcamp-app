import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Posts</h2>
    <table border="1" cellpadding="6" *ngIf="posts.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
    <p *ngIf="!posts.length">Loading...</p>
  `
})
export class ServiceComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 10); // only first 10 for brevity
    });
  }
}
