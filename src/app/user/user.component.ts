import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {first} from 'rxjs/operators';
import {AuthenticationService} from './authentication/auth.service';

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
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}
