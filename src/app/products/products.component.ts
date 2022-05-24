import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {ProductModel} from './product-item/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public fetchedProducts: ProductModel[] = [];
  public isSale: boolean;
  constructor(private productService: AppService) { }

  onSale() {
    this.isSale = false;
    if (this.fetchedProducts[0].offer.id != null ) {
      console.log('offer.id (0) ' + this.fetchedProducts[0].offer.id);
      console.log('offer.id (1) ' + this.fetchedProducts[1].offer.id);
      this.isSale = true;
      return this.isSale;
    }
  }
  ngOnInit() {
    this.productService.findAllProducts().subscribe(
      (response) => this.fetchedProducts = response
    );
  }

}
