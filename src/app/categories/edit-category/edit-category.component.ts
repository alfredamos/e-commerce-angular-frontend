import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CategoryDto } from 'src/models/categories/category.model';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup
  id = "";

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    fb: FormBuilder) {
    this.categoryForm = fb.group({
      name: ['']
    })
  }

  ngOnInit(): void {
    combineLatest([this.categoryService.categories$, this.route.paramMap]).pipe(
      map(([categories, paraMap]) => {
        this.id = paraMap.get('id')!;
        const category = categories.find((category) => category.id === this.id);
        return this.categoryForm.patchValue({
          name: category?.name
        })
      })
    ).subscribe();
  }

  categorySubmit(categoryDto: CategoryDto): void{
    categoryDto.id = this.id;
    this.categoryService
      .update(this.id, categoryDto)
      .subscribe((cat) => this.router.navigate(['/categories']));
  }

  backToList(): void{
    this.router.navigate(['/categories'])
  }
}
