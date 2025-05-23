import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRxjsComponent } from './state-rxjs.component';

describe('StateRxjsComponent', () => {
  let component: StateRxjsComponent;
  let fixture: ComponentFixture<StateRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
