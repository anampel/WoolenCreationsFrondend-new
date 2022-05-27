import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from './user';
@Injectable({ providedIn: 'any' })
export class UserService {
  private userUrl = 'http://localhost:8080/api/v1/user/';
  private userId: number;
  private productId: number;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`auth/register`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + 'findAll');
  }

  public setUserId(value: number) {
    this.userId = value;
  }

  public setProductId(value: number) {
    this.productId = value;
  }

  findWishList() {
    const url1 = this.userUrl + 'findWishList?userId=' + this.userId;
    return this.http.get(url1);
  }
  removeFromWishList(): any {
    const url1 = this.userUrl + 'deleteFromWishList?userId=' + this.userId + '&productId=' + this.productId;
    return this.http.delete<any>(url1, this.httpOptions);
  }

  addToWishlist(): any {
    const url1 = this.userUrl + 'addToWishlist';
    return this.http.post<any>(url1, {
      userId: this.userId,
      productId: this.productId
    }, this.httpOptions);
  }
}
