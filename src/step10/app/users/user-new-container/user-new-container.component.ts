import { Component, OnInit } from '@angular/core';
import {IUserForm, UserInfo, UserModel} from '../../models/user.model';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-new-container',
  templateUrl: './user-new-container.component.html',
  styleUrls: ['./user-new-container.component.css']
})
export class UserNewContainerComponent implements OnInit {

  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData: IUserForm){
      const newUser = new UserModel(undefined, formData.username, formData.email);
      newUser.info = new UserInfo();
      newUser.info.firstName = formData.firstName;
      newUser.info.lastName = formData.lastName;
      newUser.info.avatar = formData.avatar;

      this.userService.createUser(newUser)
        .subscribe(() => {
            this.router.navigate(['/users']);
        })

      console.log(newUser);
  }
}
