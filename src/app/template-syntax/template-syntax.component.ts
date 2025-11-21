import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TemplateSyntaxComponent {
  // @if
  isLoggedIn = false;
  username = 'Petar';

  // @for
  users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Guest' },
  ];

  // @switch
  statuses = ['online', 'away', 'offline'];
  status: string = 'online';
}
