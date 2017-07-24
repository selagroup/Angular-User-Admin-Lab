import { Injectable } from '@angular/core';
import {UserInfo, UserModel} from "../models/user.model";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs";

@Injectable()
export class UsersService {

  private users:UserModel[];

  private baseUrl = 'http://localhost:3000';
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http:Http) {

  }

  getUsers():Observable<UserModel[]>{

    return this.http.get(`${this.baseUrl}/users`)
      .map((res)=> this.extractData<UserModel[]>(res))

  }

  getUser(id:number):Observable<UserModel>{

    return this.http.get(`${this.baseUrl}/users/${id}`)
      .map((res)=> this.extractData<UserModel>(res))

  }

  updateUser(user:UserModel):Observable<UserModel>{
    return this.http.put(`${this.baseUrl}/users/${user.id}`,JSON.stringify(user),{headers:this.headers})
      .map((res)=> this.extractData<UserModel>(res))
  }

  deletedUser(userId:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/users/${userId}`)
      .map((res)=> this.extractData<UserModel>(res))

  }

  extractData<T>(res):T {
      return res.json();
  }
}
