import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {User} from './user';

@Injectable({providedIn: 'root'})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  private userUrl = 'http://localhost:8080/api/v1/user/';
  private userId: number;
  private productId: number;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/user/findAll`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/user/add`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/delete?userID=${id}`);
  }

  public setUserId(value: number) {
    this.userId = value;
  }

  public setProductId(value: number) {
    this.productId = value;
  }

  findWishList() {
    const url1 = `${environment.apiUrl}/user/findWishList?userId=` + this.userId;
    return this.http.get(url1);
  }

  removeFromWishList(): any {
    const url1 = `${environment.apiUrl}/user/deleteFromWishList?userId=` + this.userId + '&productId=' + this.productId;
    return this.http.delete<any>(url1, this.httpOptions);
  }

  addToWishlist(): any {
    return this.http.post<any>(`${environment.apiUrl}/user/addToWishlist`, {
      userId: this.userId,
      productId: this.productId
    }, this.httpOptions);

  }
}
