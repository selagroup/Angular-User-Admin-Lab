import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUserForm, UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user: UserModel;

  @Output()
  onUserUpdated: EventEmitter<IUserForm> = new EventEmitter()

  @Output()
  onUserDeleted: EventEmitter<UserModel> = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }


  onSaveClicked(username: string, email: string){
    this.onUserUpdated.emit({id: this.user.id, username, email});
  }

  onDeleteClicked(user: UserModel){
    this.onUserDeleted.emit(user);
  }
}
