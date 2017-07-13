import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {UserContainerComponent} from "./users-container/user-container.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserContainerComponent,UsersListComponent, UserEditComponent],
  exports:[UserContainerComponent]
})
export class UsersModule { }
