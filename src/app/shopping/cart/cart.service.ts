import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../products/product-item/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: ProductModel[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  addToCart(product: ProductModel) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
