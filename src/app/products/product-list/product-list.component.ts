import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$ = this.productService.products$;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
