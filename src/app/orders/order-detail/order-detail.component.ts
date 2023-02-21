import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  id = "";

  order$ = combineLatest([
    this.orderService.orders$,
    this.route.paramMap,
  ]).pipe(
    map(([orders, paraMap]) => {
      this.id = paraMap.get('id')!;
      return orders.find((order) => order.id === this.id);
    })
  );

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
