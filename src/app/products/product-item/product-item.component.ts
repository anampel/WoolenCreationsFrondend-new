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
  providers: [ProductListComponent]
})
export class ProductItemComponent implements OnInit {
  public fetchedProductsById: ProductModel;
  private id: string;
  getColorMap: Map<string, string> = new Map<string, string>();
  productItemForm = this.formBuilder.group({
    quantity: new FormControl()
  });
  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductListService, private cartService: CartService, private formBuilder: FormBuilder) { }

  addToCart(product: ProductModel, quantity = this.productItemForm.get('quantity').value) {
    if (quantity === null) {
      quantity = 1;
    }
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
    this.getColorMap = this.productService.setColorClass();
}}
