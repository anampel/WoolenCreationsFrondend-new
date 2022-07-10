import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CartService} from '../cart/cart.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressList, OrderModel} from '../order/order.model';
import {ProductGroup} from '../../products/product-item/product.model';
import {CheckoutService} from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: OrderModel;
  address: AddressList;
  checkoutForm: FormGroup;
  public total: string;
  cartList: ProductGroup[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private cartService: CartService,
              private checkoutService: CheckoutService) { }

  setValues(event) {
    if  (event.target.id === 'first_name') {
      this.order.user.firstName = event.target.value;
    } else if (event.target.id === 'last_name') {
      this.order.user.lastName = event.target.value;
    } else if (event.target.id === 'address') {
      this.address.address = event.target.value;
    } else if (event.target.id === 'number') {
      this.address.number = event.target.value;
    } else if (event.target.id === 'city') {
      this.address.city = event.target.value;
    } else if (event.target.id === 'country') {
      this.address.country = event.target.value;
    } else if (event.target.id === 'postcode') {
      this.address.postCode = event.target.value;
    } else if (event.target.id === 'phone') {
      this.order.user.phone = event.target.value;
    } else if (event.target.id === 'email') {
      this.order.user.username = event.target.value;
    } else {
      console.log('The necessary values didn\'t field in');
    }
  }

  onSubmit(): void {
    // Process checkout data here
    console.log('Your order has been submitted');
    this.cartService.clearCart();
  }

  ngOnInit() {
    if ( this.route.snapshot.queryParamMap.get('total') != null) {
      this.total = this.route.snapshot.queryParamMap.get('total');
    }
    this.cartList = this.checkoutService.cartLists;
    this.checkoutForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      address: [''],
      number: [''],
      city: [''],
      country: [''],
      postcode: [''],
      phone: [''],
      email: ['']
    });
  }

}
