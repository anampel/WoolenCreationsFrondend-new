import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private username: string;
  public setUsername(value: string) {
    this.username = value;
    console.log('username came from user-details.component.ts to service ' + this.username);
  }

  constructor(private http: HttpClient) {
  }

  findByUsername() {
    const url = 'http://localhost:8080/api/v1/user/findByUsername?username=' + this.username;
    return this.http.get(url);
  }
}





