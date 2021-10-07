import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../model";
import {CustomerDetailsComponent} from "../customer-details/customer-details.component";
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details') detailsComponent!: CustomerDetailsComponent;

  customers: Customer[] = [];
  customer: Customer = {} as Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }

  changeColor() {
    this.detailsComponent.changeColor();
  }

  onShift(direction: string) {
    const idx = this.customers.indexOf(this.customer);

    if (idx > 0 && direction === 'left') {
      this.customer = this.customers[idx - 1];
    } else if (direction === 'right' && idx < this.customers.length - 1) {
      this.customer = this.customers[idx + 1];
    }
  }

}
