import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../products/product-item/product.model';
import { CartService } from '../shopping/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() product!: ProductModel;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
