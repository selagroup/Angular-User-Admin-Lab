import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUserForm} from '../../models/user.model';

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

  userForm: FormGroup;

  @Output()
  private formSubmitted= new EventEmitter<IUserForm>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email]],
      firstName: '',
      lastName: '',
      avatar: ''
    })



  }

  onSubmit() {
    this.formSubmitted.emit(this.userForm.value);

  }

}
