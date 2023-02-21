import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  id = '';

  product$ = combineLatest([this.productService.products$, this.route.paramMap]).pipe(
    map(([products, paraMap]) => {
      this.id = paraMap.get('id')!;
      return products.find((product) => product.id === this.id);
    })
  );

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
}
