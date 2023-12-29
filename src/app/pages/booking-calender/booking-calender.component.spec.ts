import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalenderComponent } from './booking-calender.component';

describe('BookingCalenderComponent', () => {
  let component: BookingCalenderComponent;
  let fixture: ComponentFixture<BookingCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingCalenderComponent]
    });
    fixture = TestBed.createComponent(BookingCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
