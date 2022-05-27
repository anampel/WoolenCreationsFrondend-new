import {Component, OnInit, Input, Injectable} from '@angular/core';
import { ProductModel } from '../products/product-item/product.model';
import { CartService } from '../shopping/cart/cart.service';
@Injectable({
  providedIn: 'root'
})
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
}
