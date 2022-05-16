import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentUser;
  constructor(private productService: AppService) {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
  }
  public fetchedProducts: any[];
  public fetchedOffers: any[];

  ngOnInit() {
    this.productService.findAllProducts().subscribe(
      (response: any[]) => this.fetchedProducts = response
    );
    this.productService.findAllActiveOffers().subscribe(
      (response: any[]) => this.fetchedOffers = response
    );
  }
}
