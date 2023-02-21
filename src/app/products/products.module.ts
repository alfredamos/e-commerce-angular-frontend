import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [SharedModule],
})
export class ProductsModule {}
