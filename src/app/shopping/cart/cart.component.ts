import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from './cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private productId: string;
  private quantity: string;
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  // tslint:disable-next-line:max-line-length
  constructor( private route: ActivatedRoute, private router: Router, private cartService: CartService, private formBuilder: FormBuilder) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeFromCart(index) {
    this.cartService.removeFromCart(index);
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    this.quantity = this.route.snapshot.queryParamMap.get('quantity');
    console.log('Items to be returned: ' + this.items);
  }

}
