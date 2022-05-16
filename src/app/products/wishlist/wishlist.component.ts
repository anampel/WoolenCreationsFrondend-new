import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public fetchedProducts: any[];
  public fetchedCategories: any[];
  constructor(private categoryService: AppService) { }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe(
      (response: any[]) => this.fetchedCategories = response);
    this.categoryService.findAllProducts().subscribe(
      (response: any[]) => this.fetchedProducts = response
    );
  }

}
