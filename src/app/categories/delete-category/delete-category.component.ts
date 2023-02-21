import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CategoryService } from 'src/services/category/category.service';
import { CategoryDto } from '../../../models/categories/category.model';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css'],
})
export class DeleteCategoryComponent {
  id = '';
  deleteMessage = "";
  deleteTitle = "";
  showDeleteItem = false;
  category: CategoryDto = new CategoryDto();

  category$ = combineLatest([
    this.categoryService.categories$,
    this.route.paramMap,
  ]).pipe(
    map(([categories, paraMap]) => {
      this.id = paraMap.get('id')!;
       this.category = categories.find((category) => category.id === this.id)!;
       return this.category;
    })
  );

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteClick(){   
    this.deleteMessage = `Do you want to delete category : ${this.category?.name}?`;
    this.deleteTitle = "Category Delete Confirmation!";
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteCategory(value: boolean){
    if(value){
      this.categoryService.remove(this.id).subscribe(cat => {
        this.router.navigate(['/categories']);
      });
    }else{
      this.router.navigate(['/categories']);
    }
  }
 
}
