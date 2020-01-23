import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private currentUser: UserModel;
  constructor() {

    this.currentUser;
  }


  updateUser(username: string, email: string){
    this.currentUser.email = email;
    this.currentUser.username = username;
  }

  ngOnInit() {
    console.log('User Container Init');
    this.currentUser = new UserModel(0, 'johndoe', 'johndoe@gmail.com',
      new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png'));

  }

}
