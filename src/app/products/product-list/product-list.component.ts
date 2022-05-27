import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from './product-list.service';
import {ProductModel} from '../product-item/product.model';
import {CartService} from '../../shopping/cart/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private router: Router, private categoryService: ProductListService, private cartService: CartService) {
  }

  public catName: string;
  public subCatName: string;
  public fetchedProductsByCategory: ProductModel[];
  public isSale: boolean;
  public sorting: string;
  public sortingColumn: string;
  public sortBy = ['Sort by popularity', 'Sort by average rating',
    'Sort by latest', 'Sort by price: low to high', 'Sort by price: high to low'];
  selectedSorting = 'Default sorting';
  public newSelectedValue: string;

  onChange(newValue) {
    console.log(newValue);
    this.selectedSorting = newValue;
    this.newSelectedValue = newValue;
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

  ngOnInit() {
    this.catName = this.route.snapshot.queryParamMap.get('category1');
    this.categoryService.setCatName(this.catName);
    if (this.newSelectedValue === this.sortBy[3]) {
      this.sorting = 'ASC';
      this.sortingColumn = 'price';
    } else if (this.newSelectedValue === this.sortBy[4]) {
      this.sorting = 'DESC';
      this.sortingColumn = 'price';
    } else {
      console.log('Not supported yet');
    }
    this.categoryService.findProductsByCategory().subscribe(
      (response: any[]) => this.fetchedProductsByCategory = response
    );
    if (this.route.snapshot.queryParamMap.get('category2') != null) {
      this.subCatName = this.route.snapshot.queryParamMap.get('category2');
      this.categoryService.setSubCatName(this.subCatName);
      this.categoryService.findProductBySubCategory().subscribe(
        (response: ProductModel[]) => this.fetchedProductsByCategory = response
      );
    }
    this.categoryService.setSorting(this.sorting);
    this.categoryService.setSortingColumn(this.sortingColumn);
  }
}
