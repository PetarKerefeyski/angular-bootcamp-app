import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>🔢 Simple Counter with Signals</h2>

    <p>Count: {{ count() }}</p>
    <p>Status: {{ status() }}</p>
    <p>{{ message }}</p>

    <button (click)="increase()">+1</button>
    <button (click)="decrease()">-1</button>
    <button (click)="reset()">Reset</button>
  `
})
export class SignalsComponent {
  // signal() for local state
  count = signal(0);

  // computed() for dynamic label based on count
  status = computed(() => {
    const value = this.count();
    if (value > 5) return 'High';
    if (value < -5) return 'Low';
    return 'Normal';
  });

  // effect() to update a message when the count changes
  message = '';
  constructor() {
    effect(() => {
      this.message = `🧠 The count is now: ${this.count()}`;
    });
  }

  // Methods to update state
  increase() {
    this.count.update(value => value + 1);
  }

  decrease() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
