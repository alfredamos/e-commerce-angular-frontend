import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDto } from 'src/models/orders/order.model';
import { OrderService } from 'src/services/order/order.service';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  orderForm: FormGroup;
  id = "";

  constructor(
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.orderForm = fb.group({
      customerId: [''],
      productId: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {
    combineLatest([this.orderService.orders$, this.route.paramMap]).pipe(
      map(([orders, paraMap]) => {
        this.id = paraMap.get('id')!;
        const order = orders.find((order) => order.id === this.id);
        return this.orderForm.patchValue({
          customerId: order?.customer?.id,
          productId: order?.product?.id,
          status: order?.status,
          quantity: order?.quantity
        })
      })
    ).subscribe();

  }

  orderSubmit(orderDto: OrderDto): void {
    orderDto.id = this.id;
    orderDto.quantity = Number(orderDto.quantity);
    this.orderService
      .update(this.id, orderDto)
      .subscribe((ord) => this.router.navigate(['/']));
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
