import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Angular Signals Demo</h2>

    <!-- signal() for Local State -->
    <p>Counter: {{ counter() }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>

    <!-- computed() for Derived State -->
    <p>Status: {{ status() }}</p>

    <!-- Effect Logs -->
    <p *ngIf="logMessage">{{ logMessage }}</p>
  `
})
export class SignalsComponent {
  counter = signal(0);

  status = computed(() => {
    const count = this.counter();
    if (count === 0) return 'Ready';
    if (count < 5) return 'Warming up...';
    return 'Hot!';
  });

  logMessage = '';
  constructor() {
    effect(() => {
      const current = this.counter();
      this.logMessage = `Effect: Counter is now ${current}`;
    });
  }

  increment() {
    this.counter.update(value => value + 1);
  }

  reset() {
    this.counter.set(0);
  }
}
