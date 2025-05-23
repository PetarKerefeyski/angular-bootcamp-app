import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <h2>Parent Component</h2>

    <app-child
      [message]="parentMessage"
      (notify)="handleNotification($event)"
    ></app-child>
    <p *ngIf="childMessage">Message from child: {{ childMessage }}</p>
  `
})
export class ParentComponent {
  parentMessage = 'Hello from Parent!';
  childMessage = '';

  handleNotification(message: string) {
    this.childMessage = message;
  }
}
