import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from './product-list.service';
import {ProductGroup, ProductId, ProductModel} from '../product-item/product.model';
import {CartService} from '../../shopping/cart/cart.service';
import {WishlistComponent} from '../../user/wishlist/wishlist.component';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {
  public catName: string;
  public subCatName: string;
  public fetchedProductsByCategory: ProductModel[];
  public isSale: boolean;
  public sorting: string;
  public sortingColumn: string;
  public sortBy = ['---', 'Sort by price: low to high', 'Sort by price: high to low'];
  public newSelectedValue: string;
  public colors: any[] = [];
  colorSizeForm: FormGroup;
  getColorMap: Map<string, string> = new Map<string, string>();
  sizes: Array<any> = [
    { name: 'L', value: 'Large' },
    { name: 'XL', value: 'Extra Large' },
    { name: 'M', value: 'Medium' },
    { name: 'S', value: 'Small' },
    { name: 'XS', value: 'Extra Small' }
  ];
  constructor(
    private route: ActivatedRoute, private router: Router, private categoryService: ProductListService,
    private cartService: CartService, private wishListComponent: WishlistComponent, private formBuilder: FormBuilder) {
    this.colorSizeForm = formBuilder.group({
      selectedColors:  new FormArray([]),
      selectedSize:  new FormArray([])
    });
  }

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

  filterByColor(color: string) {
    this.categoryService.filterByColor(color).subscribe(
      (response: any[]) => this.fetchedProductsByCategory = response
    );
  }
  filterBySize(size: string) {
    this.categoryService.filterBySize(size).subscribe(
      (response: any[]) => this.fetchedProductsByCategory = response
    );
  }

  onColorChange(event: any) {
    const selectedColors = (this.colorSizeForm.controls.selectedColors as FormArray);
    if (event.target.checked) {
      selectedColors.push(new FormControl(event.target.value));
      this.filterByColor(event.target.value);
    } else {
      const index = selectedColors.controls
        .findIndex(x => x.value === event.target.value);
      selectedColors.removeAt(index);
    }
  }
  onSizeChange(event: any) {
    const selectedSize = (this.colorSizeForm.controls.selectedSize as FormArray);
    if (event.target.checked) {
      selectedSize.push(new FormControl(event.target.value));
      console.log(event.target.value);
      this.filterBySize(event.target.value);
    } else {
      const index = selectedSize.controls
        .findIndex(x => x.value === event.target.value);
      selectedSize.removeAt(index);
    }
  }

  submit() {
    console.log(this.colorSizeForm.value);
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
    this.categoryService.getColors().subscribe((response: any[]) => this.colors = response);
    this.getColorMap = this.categoryService.setColorClass();
  }
}

