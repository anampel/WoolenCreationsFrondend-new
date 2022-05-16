import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private router: Router, private categoryService: ProductListService
  ) {
  }

  private catName: string;
  private subCatName: string;
  public fetchedCategories: any[];
  public isSale: boolean;
  public sorting: string;
  public sortingColumn: string;
  // tslint:disable-next-line:max-line-length
  public sortBy = ['Sort by popularity', 'Sort by average rating', 'Sort by latest', 'Sort by price: low to high', 'Sort by price: high to low'];
  selectedSorting = 'Default sorting';
  public newSelectedValue: string;

  onChange(newValue) {
    console.log(newValue);
    this.selectedSorting = newValue;
    this.newSelectedValue = newValue;
  }

  onSale(iter) {
    this.isSale = false;
    if (this.fetchedCategories[iter].offer != null) {
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
      (response: any[]) => this.fetchedCategories = response
    );
    if (this.route.snapshot.queryParamMap.get('category2') != null) {
      this.subCatName = this.route.snapshot.queryParamMap.get('category2');
      this.categoryService.setSubCatName(this.subCatName);
      this.categoryService.findProductByCategory().subscribe(
        (response: any[]) => this.fetchedCategories = response
      );
    }
    this.categoryService.setSorting(this.sorting);
    this.categoryService.setSortingColumn(this.sortingColumn);
  }
}
