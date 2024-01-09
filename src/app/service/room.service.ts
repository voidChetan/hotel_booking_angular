import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiEndPoint: string = "https://freeapi.miniprojectideas.com/api/HotelBooking/"
  constructor(private http: HttpClient) { }

  login(obj: any) {
    return this.http.post(this.apiEndPoint + 'Login', obj);
  }

  getAllRooms() {
    return this.http.get(this.apiEndPoint + 'GetAllRooms')
  }
  GetBookingsByMonth(month: number) {
    return this.http.get(this.apiEndPoint + 'GetBookingsByMonth?month='+month)
  } 

  saveUpdateRoom(obj: any) {
    return this.http.post(this.apiEndPoint + 'AddUpdateBulkRooms', obj);
  }

  deletRoom(id: any) {
    return this.http.delete(this.apiEndPoint + 'DeleteRoomByRoomId?roomId=' + id);
  }

  getAllCustomers() {
    return this.http.get(this.apiEndPoint + 'GetAllCustomers')
  } 
  getAllUsers() {
    return this.http.get(this.apiEndPoint + 'GetAllUsers')
  } 
  addUpdateUser(obj: any) {
    return this.http.post(this.apiEndPoint + 'AddUpdateUser', obj);
  }
  deleteUser(id: any) {
    return this.http.delete(this.apiEndPoint + 'DeleteUserByUserId?userId=' + id);
  }

  createBooking(obj: any) {
    return this.http.post(this.apiEndPoint + 'bookroom', obj);
  }
  
}
