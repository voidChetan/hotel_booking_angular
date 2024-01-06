import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
 
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './pages/customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RoomsComponent,
    UsersComponent,
    NewBookingComponent,
    BookingListComponent,
    BookingCalenderComponent,
    DashboardComponent,
    CustomerComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
