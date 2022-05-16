import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,  private route: ActivatedRoute) { }
  findAllProducts() {
    return this.http.get('http://localhost:8080/api/v1/product/findAll');
  }
  findAllCategories() {
    return this.http.get('http://localhost:8080/api/v1/category/findAll');
  }
  findAllActiveOffers() {
    return this.http.get('http://localhost:8080/api/v1/product/findAllProductsInOffer');
  }
}


