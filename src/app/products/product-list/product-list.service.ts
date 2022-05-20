import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private catName: string;
  private subCatName: string;
  private sorting: string;
  private sortingColumn: string;
  private page: string;
  private url = 'http://localhost:8080/api/v1/';
  private id: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  public setCatName(value: string) {
    this.catName = value;
  }

  public setSubCatName(value: string) {
    this.subCatName = value;
  }

  public setSorting(value: string) {
    this.sorting = value;
  }

  public setSortingColumn(value: string) {
    this.sortingColumn = value;
  }

  public setPage(value: string) {
    this.page = value;
  }

  public setId(value: string) {
    this.id = value;
  }

  findProductsByCategory() {
    const url1 = this.url + 'product/findByCategory?category1=' + this.catName;
    return this.http.get(url1);
  }

  findProductBySubCategory() {
    // tslint:disable-next-line:max-line-length
    const url2 =  this.url + 'product/findByTwoCategories?category1=' + this.catName + '&category2=' + this.subCatName + '&sort=' + this.sorting + 'sortColumn=' + this.sortingColumn;
    return this.http.get(url2);

  }

  findProductById() {
    const url3 =  this.url + 'product/findById?id=' + this.id ;
    return this.http.get(url3);
  }

}


