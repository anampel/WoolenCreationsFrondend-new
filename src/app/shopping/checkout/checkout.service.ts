import {Injectable} from '@angular/core';
import {ProductGroup, ProductModel} from '../../products/product-item/product.model';

@Injectable({
  providedIn: 'any',
})
export class CheckoutService {
  public cartLists: ProductGroup[];

  constructor() {
  }

  setCartList(value) {
    this.cartLists = value;
    console.log('Get it setCartList ', value);
  }
}
