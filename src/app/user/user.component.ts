import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser?: User;
  loading = false;

  constructor(private userService: UserService) { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  // getUsers(): void {
  //   this.userService.getUsers()
  //     .subscribe(users => this.users = users);
  // }


  ngOnInit() {
    // this.getUsers();
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }
}
