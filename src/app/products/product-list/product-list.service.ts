import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private sorting: string;
  private sortingColumn: string;
  private page: string;
  private url = 'http://localhost:8080/api/v1/product';
  private currentUrl: string;
  private id: string;
  constructor(private http: HttpClient) {
  }

  public setCurrentUrl(value: string) {
    this.currentUrl = this.url + value;
  }

  public setPage(value: string) {
    this.page = value;
  }

  public setId(value: string) {
    this.id = value;
  }

  findProductsPerCategory() {
    return this.http.get(this.currentUrl);
  }

  findProductById() {
    const url3 =  this.url + 'product/findById?id=' + this.id ;
    return this.http.get(url3);
  }
  refreshCurrentSearch(sorting: string, sortingColumn: string) {
    const url1 = this.currentUrl + '&sortColumn=' + sortingColumn + '&sort=' + sorting;
    return this.http.get(url1);
  }

}


