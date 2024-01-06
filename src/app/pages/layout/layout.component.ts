import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  loggedUserData: any;
  constructor(private router: Router) {
    const localData = localStorage.getItem('hotelUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogoff() {
    localStorage.removeItem('hotelUser');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/login')
  }
}
