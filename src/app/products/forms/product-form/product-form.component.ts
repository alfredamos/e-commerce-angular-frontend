import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductDto } from 'src/models/products/product.model';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Input() productForm: FormGroup;
  @Output() onProductSubmit = new EventEmitter<ProductDto>();
  @Output() onBackToList = new EventEmitter<void>();

  categories$ = this.categoryService.categories$;

  constructor(
    private categoryService: CategoryService,
    fb: FormBuilder) {
    this.productForm = fb.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  productSubmit() {
    this.onProductSubmit.emit(this.productForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
