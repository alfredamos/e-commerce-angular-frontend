import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CustomerService } from 'src/services/customer/customer.service';
import { CustomerDto } from '../../../models/customers/customer.model';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css'],
})
export class DeleteCustomerComponent implements OnInit {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  customer = new CustomerDto();

  customer$ = combineLatest([
    this.customerService.customers$,
    this.route.paramMap,
  ]).pipe(
    map(([customers, paraMap]) => {
      this.id = paraMap.get('id')!;
      this.customer = customers.find((customer) => customer.id === this.id)!;
      return this.customer;
    })
  );
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete category : ${this.customer?.name}?`;
    this.deleteTitle = 'Category Delete Confirmation!';
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteCustomer(value: boolean) {
    if (value) {
      this.customerService.remove(this.id).subscribe((cat) => {
        this.router.navigate(['/customers']);
      });
    } else {
      this.router.navigate(['/customers']);
    }
  }
}
