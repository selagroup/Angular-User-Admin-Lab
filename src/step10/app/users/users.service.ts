import { Injectable } from '@angular/core';
import {UserInfo, UserModel} from '../models/user.model';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {

  private users: UserModel[];

  private baseUrl = 'http://localhost:3000';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<UserModel[]>{

    return this.http.get<UserModel[]>(`${this.baseUrl}/users`);

  }

  getUser(id: number): Observable<UserModel>{

    return this.http.get<UserModel>(`${this.baseUrl}/users/${id}`);

  }

  updateUser(user: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>(`${this.baseUrl}/users/${user.id}`, JSON.stringify(user),
      {headers: this.headers});
  }

  deletedUser(userId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/users/${userId}`);

  }

  createUser(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.baseUrl}/users`, JSON.stringify(user), {headers: this.headers});

  }

}

