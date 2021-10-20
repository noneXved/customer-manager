import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../../core/message.service";
import {Customer, CustomerType} from "../model";

@Component({
    selector: 'cus-customer-details',
    templateUrl: './customer-details.component.html',
    styles: ['.isActive { text-decoration: underline; }']
})
export class CustomerDetailsComponent implements OnInit {

    @Input() customer: Customer = {} as Customer;
    @Output() shift = new EventEmitter<string>();

    nameColor: string = "blue";
    isActive: boolean = true;
    showPhoto: boolean = false;
    counter: number = 0;

    CustomerType = CustomerType;

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    changeIsActive() {
        this.isActive = !this.isActive;
    }

    changeColor() {
        this.nameColor = this.nameColor === "blue" ? "red" : "blue";
        this.messageService.success('Udało się zmienić kolor!');
    }

    left() {
        this.shift.emit('left')
    }

    right() {
        this.shift.emit('right')
    }

}
