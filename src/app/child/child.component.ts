import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>Received from parent: {{ message }}</p>
      <button (click)="notifyParent()">Notify Parent</button>
    </div>
  `
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() notify = new EventEmitter<string>();

  notifyParent() {
    this.notify.emit('Child says hello!');
  }
}
