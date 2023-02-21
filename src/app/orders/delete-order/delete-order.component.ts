import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { OrderService } from 'src/services/order/order.service';
import { OrderDto } from '../../../models/orders/order.model';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css'],
})
export class DeleteOrderComponent implements OnInit {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  order = new OrderDto();

  order$ = combineLatest([this.orderService.orders$, this.route.paramMap]).pipe(
    map(([orders, paraMap]) => {
      this.id = paraMap.get('id')!;
      this.order = orders.find((order) => order.id === this.id)!;
      return this.order;
    })
  );

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete order no. : ${this.order?.id}?`;
    this.deleteTitle = 'Order Delete Confirmation!';
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteOrder(value: boolean) {
    if (value) {
      this.orderService.remove(this.id).subscribe((cat) => {
        this.router.navigate(['/']);
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
