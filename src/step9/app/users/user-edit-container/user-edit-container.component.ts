import { Component, OnInit } from '@angular/core';
import {IUserForm, UserModel} from '../../models/user.model';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-edit-container',
  templateUrl: './user-edit-container.component.html',
  styleUrls: ['./user-edit-container.component.css']
})
export class UserEditContainerComponent implements OnInit {

  private currentUser: UserModel;

  constructor(private service: UsersService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    this.getUser();

  }


  getUser(){
    this.route.params
      .map(params => {
        return params['id']
      })
      .switchMap(id => this.service.getUser(id))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  updateUser(user: IUserForm){

    this.service.updateUser(Object.assign({}, this.currentUser, user))
      .subscribe(user => this.navigateToUsers())



  }

  deleteUser(user: UserModel){
    this.service.deletedUser(user.id)
      .subscribe(user => this.navigateToUsers());

  }

  navigateToUsers(){
    this.router.navigate(['/users']);
  }

}
