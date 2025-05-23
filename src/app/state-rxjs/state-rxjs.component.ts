import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-state-rxjs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="increment()">Increment</button>
    <p>Count: {{ count$ | async }}</p>
  `
})
export class StateRxjsComponent {
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  increment() {
    this.countSubject.next(this.countSubject.value + 1);
  }
}
