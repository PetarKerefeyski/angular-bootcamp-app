import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment } from '../counter.reducer';

@Component({
  selector: 'app-state-ngrx',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Count: {{ count$ | async }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class NgrxComponent implements OnInit {
  count$!: ReturnType<Store<{ count: number }>['select']>;

  constructor(private store: Store<{ count: number }>) {}

  ngOnInit() {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
}
