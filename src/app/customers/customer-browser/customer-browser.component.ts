import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerDetailsComponent} from "../customer-details/customer-details.component";
import {CustomerService} from '../customer.service';
import {MessageService} from "../../core/message.service";
import {Customer} from "../model";

@Component({
    selector: 'cus-customer-browser',
    templateUrl: './customer-browser.component.html',
    styles: []
})
export class CustomerBrowserComponent implements OnInit {

    @ViewChild('details') detailsComponent!: CustomerDetailsComponent;

    customers: Customer[] = [];
    customer: Customer = {} as Customer;

    constructor(private customerService: CustomerService, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.refresh();
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

    deleteCustomer() {
        this.customerService.deleteCustomer(this.customer).subscribe(
            () => {
                this.refresh();
                this.messageService.success("Udało się usunąć klienta!")
            }
        );
    }

    refresh() {
        this.customerService.getCustomers().subscribe(response => {
            this.customers = response;
            this.customer = this.customers[0];
        });
    }
}
