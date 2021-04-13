import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers$: Observable<Customer[]> = this.customerService.getAll();

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }

  onDelete(customer: Customer): void {
    this.customerService.delete(customer).subscribe(
      c => this.customers$ = this.customerService.getAll()
    )

    // if (!customer.id) {
    //   this.customerService.create(customer)
    // } else {
    //   this.customerService.update(customer)
    // }
  }

}
