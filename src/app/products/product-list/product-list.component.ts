import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from './product-list.service';
import {ProductModel} from '../product-item/product.model';
import {CartService} from '../../shopping/cart/cart.service';
import {WishlistComponent} from '../../user/wishlist/wishlist.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private router: Router, private categoryService: ProductListService,
    private cartService: CartService, private wishListComponent: WishlistComponent) {
  }

  public catName: string;
  public subCatName: string;
  public fetchedProductsByCategory: ProductModel[];
  public isSale: boolean;
  public sorting: string;
  public sortingColumn: string;
  public sortBy = ['---', 'Sort by price: low to high', 'Sort by price: high to low'];
  public newSelectedValue: string;

  onChange(deviceValue) {
    if (deviceValue === this.sortBy[1]) {
      this.sorting = 'ASC';
      this.sortingColumn = 'price';
    } else if (deviceValue === this.sortBy[2]) {
      this.sorting = 'DESC';
      this.sortingColumn = 'price';
    } else {
      console.log('Not supported yet');
    }
    this.categoryService.refreshCurrentSearch(this.sorting, this.sortingColumn).subscribe(
      (response: any[]) => this.fetchedProductsByCategory = response
    );
  }

  addToCart(product: ProductModel, quantity = 1) {
    this.cartService.updateProductGroup(product, quantity);
    window.alert('Your product has been added to the cart! Quantity: ' + quantity);
  }

  onSale(iter) {
    this.isSale = false;
    if (this.fetchedProductsByCategory[iter].offer != null) {
      this.isSale = true;
    }
    return this.isSale;
  }
  addProductToWishList(prodId: number) {
    this.wishListComponent.addProductToWishList(2, prodId);
  }

  ngOnInit() {
    this.catName = this.route.snapshot.queryParamMap.get('category1');
    this.subCatName = this.route.snapshot.queryParamMap.get('category2');
    if (this.subCatName != null) {
      this.categoryService.setCurrentUrl('/findByTwoCategories?category1=' + this.catName + '&category2=' + this.subCatName);
    } else {
      this.categoryService.setCurrentUrl('/findByCategory?category1=' + this.catName);
    }
    this.categoryService.findProductsPerCategory().subscribe(
      (response: any[]) => this.fetchedProductsByCategory = response
    );

  }
}
