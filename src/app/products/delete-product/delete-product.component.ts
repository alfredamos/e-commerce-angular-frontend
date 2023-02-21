import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { ProductService } from 'src/services/product/product.service';
import { ProductDto } from '../../../models/products/product.model';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  product = new ProductDto();

  product$ = combineLatest([
    this.productService.products$,
    this.route.paramMap,
  ]).pipe(
    map(([products, paraMap]) => {
      this.id = paraMap.get('id')!;
      this.product = products.find((product) => product.id === this.id)!;
      return this.product;
    })
  );

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete product : ${this.product?.name}?`;
    this.deleteTitle = 'Product Delete Confirmation!';
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteProduct(value: boolean) {
    if (value) {
      this.productService.remove(this.id).subscribe((cat) => {
        this.router.navigate(['/products']);
      });
    } else {
      this.router.navigate(['/products']);
    }
  }
}
