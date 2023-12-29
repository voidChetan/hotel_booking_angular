import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiEndPoint: string = "https://freeapi.miniprojectideas.com/api/HotelBooking/"
  constructor(private http: HttpClient) { }

  login(obj:any) {
    return this.http.post(this.apiEndPoint + 'Login', obj);
  }
}
