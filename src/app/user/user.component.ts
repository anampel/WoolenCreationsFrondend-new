import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from "./user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;

  constructor(private userService: UserService) { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
