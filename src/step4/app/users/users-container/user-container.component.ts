import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private currentUser: UserModel;
  private users: UserModel[];

  constructor() {


  }


  updateUser(username: string, email: string){
    this.currentUser.email = email;
    this.currentUser.username = username;
  }

  ngOnInit() {
    console.log('User Container Init');


    this.users =  [
      new UserModel(0, 'johndoe', 'johndoe@gmail.com',
        new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
      ),
      new UserModel(1, 'janedoe', 'janedoe@gmail.com',
        new UserInfo('Jane', 'Doe', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
      ),
      new UserModel(2, 'johnsmith', 'johnsmith@gmail.com',
        new UserInfo('John', 'Smith', 'Sales', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
      ),
      new UserModel(3, 'janesmith', 'janesmith@gmail.com',
        new UserInfo('Jane', 'DBA', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
      ),


    ]

  }

  onItemClicked(user: UserModel){
    this.currentUser = user;
  }

}
