import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'service', loadComponent: () => import('./service/service.component').then(m => m.ServiceComponent) },
  { path: 'data-binding', loadComponent: () => import('./data-binding/data-binding.component').then(m => m.DataBindingComponent) },
  { path: 'rxjs', loadComponent: () => import('./rxjs/rxjs.component').then(m => m.RxjsComponent) },
  { path: 'subject', loadComponent: () => import('./subject/subject.component').then(m => m.SubjectComponent) },
  { path: 'template-form', loadComponent: () => import('./template-form/template-form.component').then(m => m.TemplateFormComponent) },
  { path: 'reactive-form', loadComponent: () => import('./reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent) },
  { path: 'state-rxjs', loadComponent: () => import('./state-rxjs/state-rxjs.component').then(m => m.StateRxjsComponent) },
  { path: 'parent', loadComponent: () => import('./parent/parent.component').then(m => m.ParentComponent) },
  { path: 'change-detection', loadComponent: () => import('./change-detection/change-detection.component').then(m => m.ChangeDetectionComponent) },
  { path: 'ngrx', loadComponent: () => import('./ngrx/ngrx.component').then(m => m.NgrxComponent) },
  { path: 'signals', loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent) },
  { path: 'template-syntax', loadComponent: () => import('./template-syntax/template-syntax.component').then(m => m.TemplateSyntaxComponent) },
  { path: '', redirectTo: '/service', pathMatch: 'full' },
  { path: '**', redirectTo: '/service' }
];
