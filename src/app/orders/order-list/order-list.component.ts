import { Component} from '@angular/core';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  isLoggedIn = false;
  orders$ = this.orderService.orders$; 

  constructor(private orderService: OrderService) { }

}
