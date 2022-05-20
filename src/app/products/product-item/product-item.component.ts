import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list/product-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  public fetchedProductsById: any[];
  private id: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductListService) { }

  ngOnInit() {
    if ( this.route.snapshot.queryParamMap.get('id') != null) {
      this.id =  this.route.snapshot.queryParamMap.get('id');
      this.productService.setId(this.id);
      this.productService.findProductById().subscribe(
        (response: any[]) => this.fetchedProductsById = response
      );
  }

}}
