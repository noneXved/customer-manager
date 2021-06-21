import { Component } from '@angular/core';
import {Customer} from './model';

@Component({
  selector: 'app-root',
  template: `
    <p>{{nameInput.value}}</p>
    <h1 [style.color]="nameColor" [class.isActive]="isActive">{{ customer.name.toUpperCase() }}</h1>
    <p>Opis: {{ customer.description }}</p>
    <p>Wiek: {{ customer.age }}</p>
    <p>Adres: {{ customer.address.city }} {{customer.address.street}} {{ customer.address.houseNumber }}</p>
    <img [src]="customer.photoUrl" height="200" width="200"/>
    <br/>
    <button (click)="changeIsActive()" type="button">Przełącz podkreślenie</button>
    <br/>
    <button (click)="changeColor()" type="button">Przełącz kolor</button>
    <br/>
    <input type="text" [(ngModel)]="customer.name" [ngModelOptions]="{updateOn: 'blur'}"/>
<!--    Zmienne szablonowe maja zasięg w całym szablonie-->
    <input #nameInput type="text" [value]="customer.name" (input)="customer.name = nameInput.value" />
    `,
  styles: [
      '.isActive { text-decoration: underline; }'
  ]
})
export class AppComponent {
  customer: Customer = {
    name: "Jan Kowalski",
    photoUrl: "assets/images/wallpaperzipper.jpg",
    age: 0,
    description: "a",
    address: {
      city: "Warsaw",
      street: "Dmowski",
      houseNumber: 3
    }
  };

  nameColor: string = "blue";
  isActive: boolean = true;


  constructor() {
  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

}
