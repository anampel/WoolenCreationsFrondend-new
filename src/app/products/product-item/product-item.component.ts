import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  public fetchedProducts: any[];

  constructor(private productService: AppService) { }

  ngOnInit() {
    this.productService.findAllProducts().subscribe(
      (response: any[]) => this.fetchedProducts = response
    );
  }

}
