import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { CustomerService } from 'src/services/customer/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  id = '';

  customer$ = combineLatest([this.customerService.customers$, this.route.paramMap]).pipe(
    map(([customers, paraMap]) => {
      this.id = paraMap.get('id')!;
      return customers.find((customer) => customer.id === this.id);
    })
  );
  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
