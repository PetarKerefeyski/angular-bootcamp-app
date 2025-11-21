import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, createFeatureSelector, createReducer, on, createAction } from '@ngrx/store';

// 1. Actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

// 2. Reducer (this must be exported!)
export const counterReducer = createReducer(
  0,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, _ => 0)
);

// 3. Selector
const selectCount = createFeatureSelector<number>('count');

@Component({
  selector: 'app-ngrx',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>🟦 NgRx Standalone Counter</h2>
    <p>Count: {{ count | async}}</p>
    <button (click)="increment()">+1</button>
    <button (click)="decrement()">−1</button>
    <button (click)="reset()">Reset</button>
  `
})
export class NgrxComponent {
  readonly store = inject(Store);
  count = this.store.select(selectCount);

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
