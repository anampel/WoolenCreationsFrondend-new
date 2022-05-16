import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserModel } from './user.model';
import {User} from "./user";
// This service is having methods for all the basic user HTTP call like reset password, change password, forgot password request etc.
@Injectable({ providedIn: 'root' })
export class UserService {
  private userUrl = 'http://localhost:8080/api/v1/user/';
  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    return this.http.post(`auth/register`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + 'findAll');
  }
}
