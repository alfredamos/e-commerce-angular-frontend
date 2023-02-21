import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderDto } from 'src/models/orders/order.model';
import { CustomerService } from 'src/services/customer/customer.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent{
  @Input() orderForm: FormGroup;
  @Output() onOrderSubmit = new EventEmitter<OrderDto>();
  @Output() onBackToList = new EventEmitter<void>(); 

  customers$ = this.customerService.customers$;
  products$ = this.productService.products$;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    fb: FormBuilder) {
    this.orderForm = fb.group({
      customerId: ['', Validators.required],
      productId: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }


  orderSubmit() {
    this.onOrderSubmit.emit(this.orderForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }

}
