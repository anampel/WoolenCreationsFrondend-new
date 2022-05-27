import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ProductGroup, ProductId, ProductModel} from '../../products/product-item/product.model';

@Injectable({
  providedIn: 'any'
})
export class CartService {
  productGroupMap: Map<ProductId, ProductGroup> = new Map<ProductId, ProductGroup>();

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  get cartTotalPrice(): number {
    return Array.from(this.productGroupMap.values()).map(item => item.groupPrice).reduce((acc, value) => acc += value, 0);
  }

  getProductGroupPrice(id: ProductId): number {
    if (this.productGroupMap.has(id)) {
      return this.productGroupMap.get(id).groupPrice;
    }
    throw new Error('id not found inside cart');
  }

  updateProductGroup(product: ProductModel, quantity: number) {
    this.productGroupMap.set(product.id, {
      product,
      quantity,
      groupPrice: product.price * quantity
    });
  }

  removeFromCart(id: ProductId) {
    this.productGroupMap.delete(id);
  }

  clearCart() {
    this.productGroupMap.clear();
  }
}
