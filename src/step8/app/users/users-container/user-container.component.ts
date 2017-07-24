import { Component, OnInit } from '@angular/core';
import {IUserForm, UserInfo, UserModel} from "../../models/user.model";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private currentUser:UserModel;
  private users:UserModel[];

  constructor(private service:UsersService,private router:Router) {}


  updateUser(user:IUserForm){

      this.service.updateUser(Object.assign({},this.currentUser,user))
        .subscribe((user)=>{
          this.getUsers();
        })



  }

  deleteUser(user:UserModel){
    this.service.deletedUser(user.id)
      .subscribe((data)=> {
      console.log(data);
        this.getUsers();
      })

  }
  private getUsers(){
    this.service.getUsers()
      .subscribe(users=> this.users = users);
  }

  ngOnInit() {
    console.log('User Container Init');
    this.getUsers();
  }

  onItemClicked(user:UserModel){
    this.router.navigate(['/users',user.id]);
  }

}
