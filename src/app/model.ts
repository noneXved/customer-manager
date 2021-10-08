import {InjectionToken} from "@angular/core";

export interface Customer {
    id?: number;
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    address: Address;
    type: CustomerType;
    categories: string[];
}

export interface Address {
    street: string;
    houseNumber: number;
    city: string;
}

export enum CustomerType {
    Standard,
    Premium,
    VIP
}

export interface Config {
    customerLimit: number;
    apiUrl: string;
}

export const CONFIG = new InjectionToken<Config>('app.config');