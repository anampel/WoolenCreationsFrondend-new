import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from '../../user/user';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  user: User;
  firstName: string;
  lastName: string;
  address: string;
  number: number;
  city: string;
  country: string;
  postcode: string;
  phone: string;
  email: string;
  checkoutForm = this.formBuilder.group({
    first_name: this.firstName,
    last_name: this.lastName,
    address: this.address,
    number: this.number,
    city: this.city,
    country: this.country,
    postcode: this.postcode,
    phone: this.phone,
    email: this.email
  });
  constructor(private formBuilder: FormBuilder, private cartService: CartService) { }
  onSubmit(): void {
    // Process checkout data here
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
    // this.checkoutForm = new FormGroup({
    //   first_name: new FormControl(),
    //   last_name: new FormControl(),
    //   address: new FormControl(),
    //   number: new FormControl(),
    //   city: new FormControl(),
    //   country: new FormControl(),
    //   postcode: new FormControl(),
    //   phone: new FormControl(),
    //   email: new FormControl()
    // });
  }

}
