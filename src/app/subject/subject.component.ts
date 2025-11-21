import {PostService} from '../post.service';
import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgFor} from '@angular/common';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    JsonPipe,
    NgFor
  ],
  template: `
    <div style="padding: 20px;">
      <h2>Subject Example - Notification System</h2>

      <div style="margin-bottom: 20px;">
        <button (click)="sendNotification()" style="padding: 10px 20px; margin-right: 10px;">
          Send Notification
        </button>
        <button (click)="clearNotifications()" style="padding: 10px 20px;">
          Clear Notifications
        </button>
      </div>

      <div style="background: #f0f0f0; padding: 15px; border-radius: 5px;">
        <h3>Notifications:</h3>
        <ul>
          <li *ngFor="let notification of notifications">{{ notification }}</li>
        </ul>
        <p *ngIf="notifications.length === 0" style="color: #999;">No notifications yet</p>
      </div>

      <hr style="margin: 30px 0;">

      <h2>Post Service Example</h2>
      <button (click)="load()" style="padding: 10px 20px;">Load Posts</button>
      <pre>{{ posts | json }}</pre>
    </div>
  `
})
export class SubjectComponent implements OnInit {
  posts: any;

  readonly notificationSubject = new Subject<string>();
  notifications: string[] = [];

  constructor(readonly postService: PostService) {
    this.postService.post$.subscribe(data =>
      this.posts = data
    );
  }

  ngOnInit() {
    // Subscribe to the Subject to receive notifications
    this.notificationSubject.subscribe(message => {
      this.notifications.push(message);
    });
  }

  sendNotification() {
    const timestamp = new Date().toLocaleTimeString();
    this.notificationSubject.next(`New notification at ${timestamp}`);
  }

  clearNotifications() {
    this.notifications = [];
  }

  load() {
    this.postService.fetchPosts();
  }
}
