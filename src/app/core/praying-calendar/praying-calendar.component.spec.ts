import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayingCalendarComponent } from './praying-calendar.component';

describe('PrayingCalendarComponent', () => {
  let component: PrayingCalendarComponent;
  let fixture: ComponentFixture<PrayingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayingCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
