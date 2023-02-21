import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories$ = this.categoryService.categories$;
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

}
