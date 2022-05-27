import {Component, Injectable, OnInit} from '@angular/core';
import {ProductModel} from '../../products/product-item/product.model';
import {UserService} from '../user.service';
import {CartService} from '../../shopping/cart/cart.service';
import {ActivatedRoute} from '@angular/router';
@Injectable({
  providedIn: 'any'
})
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [UserService, CartService]
})
export class WishlistComponent implements OnInit {
  fetchedWishlistProducts: ProductModel[];
  public isSale: boolean;
  private userId: number = Number(this.route.snapshot.queryParamMap.get('userId'));
  private productId: number;
  constructor(private route: ActivatedRoute, private userService: UserService, private cartService: CartService) { }

  addToCart(product: ProductModel, quantity = 1) {
    this.cartService.updateProductGroup(product, quantity);
    window.alert('Your product has been added to the cart! Quantity: ' + quantity);
  }
  onSale(iter) {
    this.isSale = false;
    if (this.fetchedWishlistProducts[iter].offer != null) {
      this.isSale = true;
    }
    return this.isSale;
  }

  addProductToWishList(userId: number, productId: number) {
    this.userId = userId;
    this.userService.setUserId(userId);
    this.userService.setProductId(productId);
    this.userService.addToWishlist().subscribe(user => {this.userId = user.id; });
    window.alert('The product ' + productId + ' added to wishlist');
  }

  ngOnInit(): void {
    this.userService.setUserId(this.userId);
    this.userService.findWishList().subscribe(
      (response: ProductModel[]) => this.fetchedWishlistProducts = response
    );
  }

}
