import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Angular Data Binding Examples</h2>

    <!-- Interpolation -->
    <h3>Interpolation: {{ title }}</h3>

    <!-- Property Binding -->
    <img [src]="imageUrl" sizes="40x40" alt="Angular Logo" width="100" />

    <!-- Event Binding -->
    <button (click)="handleClick()">Click Me</button>
    @if (clicked) {
      <p>You clicked the button, batko!</p>
    }
    <!-- Two-Way Binding -->
    <input [(ngModel)]="name" placeholder="Enter your name" />
    <p>Hello, {{ name }}!</p>
  `
})
export class DataBindingComponent {
  title = 'Welcome to Angular';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  clicked = false;
  name = '';

  handleClick() {
    this.clicked = !this.clicked;
  }
}
