import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { CategoryDto } from '../../models/categories/category.model';
import { CreateCategoryDto } from 'src/models/categories/create-category.model';
import { UpdateCategoryDto } from 'src/models/categories/update-category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoriesSubject = new BehaviorSubject<CategoryDto[]>(null!);
  categories$ = this.categoriesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.categories$ = this.findAll()
  }

  create(category: CreateCategoryDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(environment.categoryUrl, category);
  }

  findAll(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(environment.categoryUrl);
  }

  findOne(id: string): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${environment.categoryUrl}/${id}`);
  }

  updateCategories$(categories: CategoryDto[]) {
    this.categoriesSubject.next(categories);
  }

  remove(id: string): Observable<CategoryDto> {
    return this.http.delete<CategoryDto>(`${environment.categoryUrl}/${id}`);
  }

  update(id: string, category: UpdateCategoryDto): Observable<CategoryDto> {
    return this.http.patch<CategoryDto>(
      `${environment.categoryUrl}/${id}`,
      category
    );
  }
}
