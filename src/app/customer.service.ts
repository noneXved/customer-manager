import { Injectable } from '@angular/core';
import {Customer, CustomerType} from "./model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers : Customer[] = [
    {
      name: "Jan Kowalski",
      photoUrl: "assets/images/wallpaperzipper.jpg",
      age: 0,
      description: "Very important client",
      address: {
        city: "Warsaw",
        street: "Dmowski",
        houseNumber: 3
      },
      type: CustomerType.Standard,
      categories: [
        "branza budowalana",
        "gastronomia",
        "transport"
      ]
    },
    {
      name: "Paulina Bajno",
      photoUrl: "assets/images/wallpaperzipper.jpg",
      age: 24,
      description: "Very important person",
      address: {
        city: "Bialystok",
        street: "Zelazna",
        houseNumber: 5
      },
      type: CustomerType.VIP,
      categories: [
        "branza budowalana",
        "gastronomia",
        "dietetyka"
      ]
    },
    {
      name: "Natalia Stepnowska",
      photoUrl: "assets/images/wallpaperzipper.jpg",
      age: 21,
      description: "Not very important",
      address: {
        city: "Nowogrod",
        street: "Sikorski",
        houseNumber: 12
      },
      type: CustomerType.Premium,
      categories: [
        "wizaż",
        "seriale",
        "IT"
      ]
    }
  ]

  constructor() { }

  getCustomers() {
    return this.customers;
  }
}
