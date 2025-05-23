import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form #form="ngForm" (ngSubmit)="submit(form.value)">
      <input name="email" ngModel required placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  `
})
export class TemplateFormComponent {
  submit(data: any) {
    alert('Submitted: ' + JSON.stringify(data));
  }
}
