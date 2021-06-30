import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReadingCalendarComponent } from './daily-reading-calendar.component';

describe('DailyReadingCalendarComponent', () => {
  let component: DailyReadingCalendarComponent;
  let fixture: ComponentFixture<DailyReadingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyReadingCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyReadingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
