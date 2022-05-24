import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from './cart.service';
import {FormBuilder} from '@angular/forms';
import {ProductGroup} from '../../products/product-item/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private productId: string;
  public quantity: number;
  total = 0;
  productGroups: ProductGroup[] = Array.from(this.cartService.productGroupMap.values());
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    qty: this.quantity,
    total: this.total
  });

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService, private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeFromCart(productGroup: ProductGroup) {
    this.cartService.removeFromCart(productGroup.product.id);
  }

  getQuantity(): number {
    return this.checkoutForm.get('qty').value;
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    // this.quantity = this.route.snapshot.queryParamMap.get('quantity');
    this.checkoutForm.get('qty').valueChanges.subscribe(value => {
      console.log('quantity changed', value);
    });
  }

}
