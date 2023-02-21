import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryDto } from '../../../models/categories/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    fb: FormBuilder) {
    this.categoryForm = fb.group({
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  categorySubmit(categoryDto: CategoryDto): void{
    this.categoryService
      .create(categoryDto)
      .subscribe((cat) => this.router.navigate(['/categories']));
  }

  backToList(): void{
    this.router.navigate(['/categories'])
  }
}
