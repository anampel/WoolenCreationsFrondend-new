import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ProductGroup, ProductId} from '../product-item/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private page: string;
  private url = 'http://localhost:8080/api/v1/product';
  private currentUrl: string;
  private id: string;
  colorMap: Map<string, string> = new Map<string, string>();
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
    const url3 =  this.url + '/findById?id=' + this.id ;
    return this.http.get(url3);
  }
  refreshCurrentSearch(sorting: string, sortingColumn: string) {
    this.currentUrl = this.currentUrl + '&sortColumn=' + sortingColumn + '&sort=' + sorting;
    return this.http.get( this.currentUrl);
  }
  filterByColor(color: string) {
    this.currentUrl = this.currentUrl + '&color=' + color;
    window.alert('in filterByColor: ' + this.currentUrl);
    return this.http.get(this.currentUrl);
  }

  getColors() {
    const url = this.url + '/getColors';
    return this.http.get(url);
  }

  setColorClass(): Map<string, string> {
    this.colorMap.set('blue', 'sky-blue');
    this.colorMap.set('red', 'red');
    this.colorMap.set('grey', 'grey');
    this.colorMap.set('black', 'dark');
    this.colorMap.set('white', 'light');
    this.colorMap.set('pink', 'pink');
    this.colorMap.set('purple', 'purple');
    this.colorMap.set('orange', 'orange');
    this.colorMap.set('green', 'green');
    return this.colorMap;
  }
}


