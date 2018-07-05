import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserContainerComponent} from './users-container/user-container.component';
import {UserNewContainerComponent} from './user-new-container/user-new-container.component';
import {UserEditContainerComponent} from './user-edit-container/user-edit-container.component';


const routes: Routes = [
  {path: 'users', component: UserContainerComponent },
  {path: 'users/new', component: UserNewContainerComponent },
  {path: 'users/:id', component: UserEditContainerComponent}

]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRouting { }
