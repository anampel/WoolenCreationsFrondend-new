import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list/product-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from './product.model';
import {ProductListComponent} from '../product-list/product-list.component';
import { CartService } from '../../shopping/cart/cart.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductListComponent]
})
export class ProductItemComponent implements OnInit {
  public fetchedProductsById: ProductModel;
  private id: string;
  productItemForm = this.formBuilder.group({
    quantity: new FormControl()
  });
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductListService, private cartService: CartService, private formBuilder: FormBuilder) { }

  addToCart(product: ProductModel, quantity = this.productItemForm.get('quantity').value) {
    this.cartService.updateProductGroup(product, quantity);
    window.alert('Your product has been added to the cart! Quantity: ' + quantity);
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
