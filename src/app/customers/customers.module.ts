import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    DeleteCustomerComponent,
  ],
  imports: [SharedModule],
})
export class CustomersModule {}
