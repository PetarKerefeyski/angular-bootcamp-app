import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ now }}</p>
    <button (click)="tick()">Tick</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  now = new Date().toISOString();
  tick() {
    this.now = new Date().toISOString();
  }
}
