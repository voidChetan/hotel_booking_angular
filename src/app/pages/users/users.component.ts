import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "userName": "",
    "password": "",
    "role": ""
  };

  constructor(private roomSrv:RoomService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.roomSrv.getAllUsers().subscribe((Res:any)=>{
        this.userList = Res.data;
    })
  }

  onSaveUser() {
    this.roomSrv.addUpdateUser(this.userObj).subscribe((res:any)=> {
      if(res.result) {
        alert('User Created Success');
        this.getUsers();
      } else {
        alert(res.message)
      }
    })
  }
  onEdit( data: any) {
    const strObj = JSON.stringify(data); 
    this.userObj = JSON.parse(strObj);
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure Wamt to Delete');
    if(isDelete) {
      this.roomSrv.deleteUser(id).subscribe((res:any)=>{
        if(res.result){
          alert('User Deleted');
          this.getUsers();
        } else {
          alert(res.message)
        }
      })
    }
    
  }


}
