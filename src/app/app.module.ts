import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HighlightDirective} from './highlight.directive';
import {CustomerBrowserComponent} from './customer-browser/customer-browser.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerService} from "./customer.service";
import {ToastrModule} from "ngx-toastr";
import {MessageService} from "./message.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CONFIG, Config} from "./model";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

const config: Config = {
    customerLimit: 10,
    apiUrl: 'http://localhost:13378'
}

@NgModule({
    declarations: [
        AppComponent,
        HighlightDirective,
        CustomerBrowserComponent,
        CustomerDetailsComponent,
        CustomerAddComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        {provide: CONFIG, useValue: config},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true},
        CustomerService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
