import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Subscription, map, filter} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Seconds: {{ seconds }}</p>`
})
export class RxjsComponent implements OnInit, OnDestroy {
  seconds = 0;
  private sub?: Subscription;

  ngOnInit() {
    this.sub = interval(1000)
    .pipe(
      map(val => val * 10),
      filter(val => val % 3 === 0)
    )
    .subscribe(val => this.seconds = val);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
