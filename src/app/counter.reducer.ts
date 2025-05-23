import { createReducer, createAction, on } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const counterReducer = createReducer(
  0, // initial state
  on(increment, state => state + 1)
);
