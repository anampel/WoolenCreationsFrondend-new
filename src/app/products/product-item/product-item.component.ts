import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list/product-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from './product.model';
import {ProductListComponent} from '../product-list/product-list.component';
import { CartService } from '../../shopping/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductListComponent]
})
export class ProductItemComponent implements OnInit {
  public fetchedProductsById: ProductModel;
  private id: string;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductListService, private cartService: CartService) { }

  addToCart(product: ProductModel) {
    this.cartService.updateProductGroup(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    if ( this.route.snapshot.queryParamMap.get('id') != null) {
      this.id =  this.route.snapshot.queryParamMap.get('id');
      this.productService.setId(this.id);
      this.productService.findProductById().subscribe(
        (response: ProductModel) => this.fetchedProductsById = response
      );
  }

}}
