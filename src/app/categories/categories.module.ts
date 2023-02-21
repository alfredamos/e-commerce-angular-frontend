import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './forms/category-form/category-form.component';

@NgModule({
  declarations: [
    CreateCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryFormComponent,
  ],
  imports: [SharedModule],
})
export class CategoriesModule {}
