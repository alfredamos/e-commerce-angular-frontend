import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CustomerDto } from '../../models/customers/customer.model';
import { CreateCustomerDto } from 'src/models/customers/create-customer.model';
import { UpdateCustomerDto } from 'src/models/customers/update-customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersSubject = new BehaviorSubject<CustomerDto[]>(null!);
  customers$ = this.customersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.customers$ = this.findAll();
  }

  create(customer: CreateCustomerDto): Observable<CustomerDto> {
    return this.http.post<CustomerDto>(environment.customerUrl, customer);
  }

  findAll(): Observable<CustomerDto[]> {
    return this.http.get<CustomerDto[]>(environment.customerUrl);
  }

  findOne(id: string): Observable<CustomerDto> {
    return this.http.get<CustomerDto>(`${environment.customerUrl}/${id}`);
  }

  updateCustomers$(customers: CustomerDto[]) {
    this.customersSubject.next(customers);
  }

  remove(id: string): Observable<CustomerDto> {
    return this.http.delete<CustomerDto>(`${environment.customerUrl}/${id}`);
  }

  update(id: string, customer: UpdateCustomerDto): Observable<CustomerDto> {
    return this.http.patch<CustomerDto>(
      `${environment.customerUrl}/${id}`,
      customer
    );
  }
}
