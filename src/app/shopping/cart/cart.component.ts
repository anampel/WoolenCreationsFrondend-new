import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from './cart.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private productId: string;
  public quantity: number;
  items = this.cartService.getItems();
  total: number;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    qty: this.quantity,
    total: this.total
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

  calculateTotal() {
    this.total = 0;
    for (const item of this.items) {
      this.total = this.total + item.price;
    }
    return this.total;
  }

  getQuantity(): number {
      return this.checkoutForm.get('qty').value;
   }
  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    // this.quantity = this.route.snapshot.queryParamMap.get('quantity');
    console.log('Items to be returned: ' + this.items);
    this.checkoutForm = new FormGroup(
      {
        qty: new FormControl(),
        total: new FormControl()
      }
    );
  }

}
