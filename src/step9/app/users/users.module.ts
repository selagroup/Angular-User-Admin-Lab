import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {UserContainerComponent} from './users-container/user-container.component';
import {UsersService} from './users.service';
import {UsersRouting} from './users.routing';
import { UserEditContainerComponent } from './user-edit-container/user-edit-container.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRouting
  ],
  declarations: [UserContainerComponent, UsersListComponent, UserEditComponent, UserEditContainerComponent],
  exports: [UserContainerComponent],
  providers: [UsersService]
})
export class UsersModule { }
