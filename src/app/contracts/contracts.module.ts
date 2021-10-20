import {NgModule} from '@angular/core';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractService} from "./contract.service";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {ContractDetailsComponent} from "./contract-details/contract-details.component";
import {ContractResolver} from "./contract-resolver.service";

const routes: Routes = [
    {
        path: '/:id',
        component: ContractDetailsComponent,
        resolve: {
            contract: ContractResolver
        }
    },
    {path: '', component: ContractListComponent}
];

@NgModule({
    declarations: [
        ContractListComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ContractListComponent
    ],
    providers: [ContractService, ContractResolver]
})
export class ContractsModule {
}
