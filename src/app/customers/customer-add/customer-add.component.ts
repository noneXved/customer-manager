import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../core/message.service';
import { CustomerType } from '../model';
import {CustomerService} from "../customer.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'cus-customer-add',
    templateUrl: './customer-add.component.html',
    styles: []
})
export class CustomerAddComponent implements OnInit {
    name: string = '';
    age: number = 0;
    type: CustomerType = CustomerType.Standard;

    CustomerType = CustomerType;

    constructor(private customerService: CustomerService, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    add(form: NgForm) {
        this.customerService.createCustomer({
            name: this.name,
            age: this.age,
            type: this.type,
            photoUrl: '',
            categories: [],
            description: '',
            address: {
                city: '',
                houseNumber: 0,
                street: ''
            }

        }).subscribe(
            () => {
                this.messageService.success(`Dodano klienta!`);
                form.resetForm();
            }
        );
    }

}
