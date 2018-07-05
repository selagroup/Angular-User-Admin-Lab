import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {UserContainerComponent} from './users-container/user-container.component';
import {UsersService} from './users.service';
import {UsersRouting} from './users.routing';
import { UserEditContainerComponent } from './user-edit-container/user-edit-container.component';
import {SharedModule} from '../shared/shared.module';
import {UserNewContainerComponent} from './user-new-container/user-new-container.component';
import {UserFormComponent} from './user-form/user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserContainerComponent,
      UsersListComponent,
    UserEditComponent,
    UserEditContainerComponent,
    UserNewContainerComponent,
    UserFormComponent,
    UserFormReactiveComponent],
  exports: [UserContainerComponent],
  providers: [UsersService]
})
export class UsersModule { }
