  import {Component, EventEmitter, OnInit, Output} from '@angular/core';
  import {IUserForm} from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private emailPattern: RegExp = /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;
  private user: IUserForm= {username: '', email: ''};

  @Output()
  private formSubmitted= new EventEmitter<IUserForm>();
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.formSubmitted.emit(this.user);

  }



}
