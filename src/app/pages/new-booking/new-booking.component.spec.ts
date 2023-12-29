import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookingComponent } from './new-booking.component';

describe('NewBookingComponent', () => {
  let component: NewBookingComponent;
  let fixture: ComponentFixture<NewBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookingComponent]
    });
    fixture = TestBed.createComponent(NewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
