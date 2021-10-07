import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {CustomerService} from "./customer.service";
import {ToastrModule} from "ngx-toastr";
import {MessageService} from "./message.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        HighlightDirective,
        CustomerBrowserComponent,
        CustomerDetailsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        CustomerService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
