import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDto } from 'src/models/orders/order.model';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(
    private router: Router,
    private orderService: OrderService,
    fb: FormBuilder
  ) {
    this.orderForm = fb.group({
      customerId: [''],
      productId: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {}

  orderSubmit(orderDto: OrderDto): void {
    orderDto.quantity = Number(orderDto.quantity);
    this.orderService
      .create(orderDto)
      .subscribe((ord) => this.router.navigate(['/']));
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
