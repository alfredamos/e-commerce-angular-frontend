import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  id = "";
  category$ = combineLatest([
    this.categoryService.categories$,
    this.route.paramMap,
  ]).pipe(
    map(([categories, paraMap]) => {
      this.id = paraMap.get('id')!;
      return categories.find((category) => category.id === this.id);
    })
  );

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
