import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CustomersModule} from "./customers/customers.module";
import {CoreModule} from "./core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
    {path: 'contracts', loadChildren: () => import('src/app/contracts/contracts.module').then(m => m.ContractsModule)},
    {path: '', redirectTo: 'customers', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        CustomersModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
