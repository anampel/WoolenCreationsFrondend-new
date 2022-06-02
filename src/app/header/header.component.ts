import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ProductModel} from '../products/product-item/product.model';
import {User} from '../user/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../user/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() product!: ProductModel;
  currentUser: User;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }
}

