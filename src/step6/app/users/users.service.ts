import { Injectable } from '@angular/core';
import {UserInfo, UserModel} from '../models/user.model';

@Injectable()
export class UsersService {

  private users: UserModel[];


  constructor() {
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

  getUsers(): UserModel[]{
    return this.users;
  }

  updateUser(user: UserModel){
    const inx = this.users.findIndex(u => u.id === user.id);
    let updatedUser;
    if (inx >= 0){
      updatedUser = this.users[inx];
      updatedUser.username = user.username;
      updatedUser.email = user.email;
    }

    return updatedUser;
  }

  deletedUser(userId: number): boolean{
    const prevLength = this.users.length;
    this.users = this.users.filter(user => user.id !== userId);

    return prevLength !== this.users.length;
  }

}
