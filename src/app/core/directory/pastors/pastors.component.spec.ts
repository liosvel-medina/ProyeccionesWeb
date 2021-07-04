import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorsComponent } from './pastors.component';

describe('PastorsComponent', () => {
  let component: PastorsComponent;
  let fixture: ComponentFixture<PastorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
