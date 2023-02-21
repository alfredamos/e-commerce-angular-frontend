import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../../models/orders/order.model';
import { CreateOrderDto } from 'src/models/orders/create-order.model';
import { UpdateOrderDto } from 'src/models/orders/update-order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private ordersSubject = new BehaviorSubject<OrderDto[]>(null!);
  orders$ = this.ordersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.orders$ = this.findAll();
  }

  create(order: CreateOrderDto): Observable<OrderDto> {
    return this.http.post<OrderDto>(environment.orderUrl, order);
  }

  findAll(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(environment.orderUrl);
  }

  findOne(id: string): Observable<OrderDto> {
    return this.http.get<OrderDto>(`${environment.orderUrl}/${id}`);
  }

  updateOrders$(orders: OrderDto[]) {
    this.ordersSubject.next(orders);
  }

  remove(id: string): Observable<OrderDto> {
    return this.http.delete<OrderDto>(`${environment.orderUrl}/${id}`);
  }

  update(id: string, order: UpdateOrderDto): Observable<OrderDto> {
    return this.http.patch<OrderDto>(`${environment.orderUrl}/${id}`, order);
  }
}
