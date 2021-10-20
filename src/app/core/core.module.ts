import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from "./message.service";
import {Config, CONFIG} from "../model";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorHandlingInterceptor} from "./error-handling.interceptor";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { ContractDetailsComponent } from '../contracts/contract-details/contract-details.component';
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";

const config: Config = {
    customerLimit: 10,
    apiUrl: 'http://localhost:13378'
}

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        MessageService,
        {provide: CONFIG, useValue: config},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true},
    ],
    declarations: [NavbarComponent, NotFoundComponent, ContractDetailsComponent],
    exports: [NavbarComponent]
})
export class CoreModule {
}
