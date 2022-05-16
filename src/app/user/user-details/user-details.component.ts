import { Component, OnInit } from '@angular/core';
import {UserDetailsService} from './user-details.service';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserModel;
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;
  // user: UserModel = new UserModel( this.firstname, this.lastname, this.password, this.username);
  constructor( private route: ActivatedRoute, private profileService: UserDetailsService) {
    this.username = this.user.username;
    this.firstname = this.user.firstName;
    this.lastname =  this.user.lastName;
    this.password = this.user.password;
    console.log('username came from sign up page ' + this.username);
  }
  ngOnInit() {
    this.profileService.setUsername(this.username);
    this.profileService.findByUsername().subscribe((response: UserModel) => this.user = response);
  }

}
