import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderFormComponent } from './forms/order-form/order-form.component';

@NgModule({
  declarations: [
    CreateOrderComponent,
    DeleteOrderComponent,
    EditOrderComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderFormComponent,
  ],
  imports: [SharedModule],
})
export class OrdersModule {}
