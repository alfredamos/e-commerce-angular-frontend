import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from '../../models/products/product.model';
import { CreateProductDto } from 'src/models/products/create-product.model';
import { UpdateProductDto } from 'src/models/products/update-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject = new BehaviorSubject<ProductDto[]>(null!);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.products$ = this.findAll();
  }

  create(product: CreateProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(environment.productUrl, product);
  }

  updateProducts$(products: ProductDto[]){
    this.productsSubject.next(products)
  }

  findAll(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(environment.productUrl);
  }

  findOne(id: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${environment.productUrl}/${id}`);
  }

  remove(id: string): Observable<ProductDto> {
    return this.http.delete<ProductDto>(`${environment.productUrl}/${id}`);
  }

  update(id: string, product: UpdateProductDto): Observable<ProductDto> {
    return this.http.patch<ProductDto>(`${environment.productUrl}/${id}`, product);
  }
}
