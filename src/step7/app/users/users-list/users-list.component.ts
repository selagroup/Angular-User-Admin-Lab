import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private currentUser: UserModel;

  @Input()
  users: UserModel[];

  @Output()
  userClicked: EventEmitter<UserModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(user: UserModel){
    this.currentUser = user;
    this.userClicked.emit(user);

  }


}
