import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDto } from 'src/models/products/product.model';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private router: Router,
    private productService: ProductService,
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

  ngOnInit(): void {}

  productSubmit(productDto: ProductDto): void {
    productDto.price = Number(productDto.price);
    productDto.quantity = Number(productDto.quantity);
    this.productService
      .create(productDto)
      .subscribe((prod) => this.router.navigate(['/products']));
    this.router.navigate(['/products']);
  }

  backToList(): void {
    this.router.navigate(['/products']);
  }
}
