import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from "../../models/user.model";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private currentUser:UserModel;
  private users:UserModel[];

  constructor(private service:UsersService) {


  }


  updateUser(user:UserModel){

      if(this.service.updateUser(user)){
        this.getUsers();
      }

  }

  deleteUser(user:UserModel){
    if(this.service.deletedUser(user.id)){
      this.getUsers();
    }
  }
  private getUsers(){
    this.users = this.service.getUsers();
  }
  ngOnInit() {
    console.log('User Container Init');

    this.getUsers();
  }

  onItemClicked(user:UserModel){
    this.currentUser = user;
  }

}
