import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComplexityComponent } from './time-complexity.component';

describe('TimeComplexityComponent', () => {
  let component: TimeComplexityComponent;
  let fixture: ComponentFixture<TimeComplexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeComplexityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
