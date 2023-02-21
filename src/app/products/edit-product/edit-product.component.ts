import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/models/products/product.model';
import { ProductService } from 'src/services/product/product.service';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  id = "";

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.productForm = fb.group({
      name: [''],
      categoryId: [''],
      price: [''],
      description: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {
    combineLatest([this.productService.products$, this.route.paramMap]).pipe(
      map(([products, paraMap]) => {
        this.id = paraMap.get('id')!;
        const product = products.find((product) => product.id === this.id);
        return this.productForm.patchValue({
          name: product?.name,
          categoryId: product?.Category?.id,
          price: product?.price,
          quantity: product?.quantity,
          description: product?.description
        });
      })
    ).subscribe();
  }

  productSubmit(productDto: ProductDto): void {
    productDto.id = this.id;
    productDto.price = Number(productDto.price);
    productDto.quantity = Number(productDto.quantity);
    this.productService
      .update(this.id, productDto)
      .subscribe((prod) => this.router.navigate(['/products']));
  }

  backToList(): void {
    this.router.navigate(['/products']);
  }
}
